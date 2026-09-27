import React, { useState } from 'react';
import { X, Calendar, MapPin, Anchor, ShieldCheck, Check, AlertCircle, Compass, Users, Ship, Star, Award, Mail } from 'lucide-react';
import { Expedition, Language } from '../types';

interface ExpeditionModalProps {
  expedition: Expedition | null;
  onClose: () => void;
  currentLang: Language;
  onBookingSubmit: (expeditionTitle: string, contactData: { name: string; email: string; phone: string; spots: number; comment: string }) => void;
}

export const ExpeditionModal: React.FC<ExpeditionModalProps> = ({
  expedition,
  onClose,
  currentLang,
  onBookingSubmit,
}) => {
  const isRu = currentLang === 'ru';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [spots, setSpots] = useState(1);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!expedition) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      onBookingSubmit(expedition.title, { name, email, phone, spots, comment });
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Header with image */}
        <div className="relative h-64 sm:h-80 w-full shrink-0">
          <img
            src={expedition.image}
            alt={expedition.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-950/70 border border-slate-700/80 text-white hover:bg-slate-900 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Title */}
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-cyan-500/90 text-slate-950 text-xs font-bold uppercase tracking-wider">
                {expedition.regionLabel}
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-950/70 text-slate-200 border border-slate-700 text-xs font-medium">
                {expedition.yachtModel} ({expedition.yachtYear})
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold">
                {isRu ? `Осталось ${expedition.spotsLeft} мест` : `${expedition.spotsLeft} spots left`}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              {expedition.title}
            </h3>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
            <div>
              <div className="text-[11px] text-slate-400 uppercase font-semibold flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                {isRu ? 'Даты' : 'Dates'}
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mt-1">{expedition.dates}</div>
            </div>
            <div>
              <div className="text-[11px] text-slate-400 uppercase font-semibold flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {isRu ? 'Маршрут' : 'Ports'}
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mt-1">{expedition.startPort} → {expedition.endPort}</div>
            </div>
            <div>
              <div className="text-[11px] text-slate-400 uppercase font-semibold flex items-center gap-1">
                <Ship className="w-3.5 h-3.5 text-cyan-400" />
                {isRu ? 'Судно' : 'Vessel'}
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mt-1">{expedition.yachtLengthFt} ft • {expedition.cabins} кают</div>
            </div>
            <div>
              <div className="text-[11px] text-slate-400 uppercase font-semibold flex items-center gap-1">
                <Anchor className="w-3.5 h-3.5 text-cyan-400" />
                {isRu ? 'Взнос за место' : 'Berth Share'}
              </div>
              <div className="text-base sm:text-lg font-extrabold text-cyan-400 mt-0.5">{expedition.pricePerPersonEur} €</div>
            </div>
          </div>

          {/* Description & Highlights */}
          <div>
            <h4 className="text-lg font-bold text-white mb-2 font-display">
              {isRu ? 'О путешествии' : 'About the Voyage'}
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              {expedition.description}
            </p>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {expedition.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skipper Profile */}
          <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <img
              src={expedition.skipper.avatar}
              alt={expedition.skipper.name}
              referrerPolicy="no-referrer"
              className="w-16 h-16 rounded-full object-cover border-2 border-cyan-500/50 shadow-md"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-base">{expedition.skipper.name}</span>
                <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-bold uppercase border border-cyan-500/30">
                  {expedition.skipper.license}
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1">{expedition.skipper.bio}</p>
              <div className="flex items-center gap-4 mt-2 text-[11px] text-slate-400">
                <span>{expedition.skipper.experienceYears} {isRu ? 'лет в море' : 'years at sea'}</span>
                <span>•</span>
                <span>{expedition.skipper.nauticalMiles.toLocaleString()} {isRu ? 'морских миль' : 'nautical miles'}</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-amber-400 font-semibold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  {expedition.skipper.rating}
                </span>
              </div>
            </div>
          </div>

          {/* Detailed Day-by-Day Itinerary */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 font-display flex items-center justify-between">
              <span>{isRu ? 'Программа маршрута по дням' : 'Day-by-Day Itinerary'}</span>
              <span className="text-xs font-normal text-slate-400">
                {isRu ? 'Маршрут может корректироваться по погоде' : 'Subject to wind conditions'}
              </span>
            </h4>
            <div className="space-y-3 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800">
              {expedition.itinerary.map((day) => (
                <div key={day.day} className="relative flex items-start gap-4 pl-1">
                  <div className="w-7 h-7 rounded-full bg-slate-950 border-2 border-cyan-500 text-cyan-400 font-bold text-xs flex items-center justify-center shrink-0 z-10">
                    {day.day}
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="text-xs sm:text-sm font-bold text-white">{day.title}</div>
                      <div className="flex items-center gap-2 text-[11px] text-slate-400">
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-cyan-300">
                          {day.anchorType}
                        </span>
                        <span>{day.distanceNm} NM</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 font-light">{day.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions / Exclusions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Check className="w-4 h-4" />
                {isRu ? 'Включено в участие:' : 'Included:'}
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {expedition.included.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" />
                {isRu ? 'Оплачивается отдельно:' : 'Not Included:'}
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {expedition.notIncluded.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking Form Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-950 border border-cyan-500/40">
            {submitted ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white font-display">
                  {isRu ? 'Заявка успешно отправлена!' : 'Inquiry Sent Successfully!'}
                </h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  {isRu
                    ? `Капитан и координатор похода свяжутся с вами по email и телефону. Копия запроса направлена на cosailmail@gmail.com.`
                    : `The skipper and crew coordinator will contact you shortly. A notification has been sent to cosailmail@gmail.com.`}
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-6 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
                >
                  {isRu ? 'Закрыть окно' : 'Close'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-white font-display">
                    {isRu ? 'Забронировать место в этом походе' : 'Reserve Berths for this Voyage'}
                  </h4>
                  <span className="text-xs text-slate-400">
                    {isRu ? 'Оплата только после подтверждения экипажа' : 'Payment only after crew confirmation'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">{isRu ? 'Ваше имя' : 'Your Name'}</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={isRu ? 'Константин' : 'John Doe'}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">{isRu ? 'Email для связи' : 'Email Address'}</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@domain.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">{isRu ? 'Телефон / Telegram' : 'Phone / Telegram'}</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 900 123-45-67"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">{isRu ? 'Количество мест' : 'Number of Berths'}</label>
                    <select
                      value={spots}
                      onChange={(e) => setSpots(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 cursor-pointer"
                    >
                      <option value={1}>{isRu ? '1 место (в двухместной каюте)' : '1 Berth'}</option>
                      <option value={2}>{isRu ? '2 места (целая каюта)' : '2 Berths (Full Cabin)'}</option>
                      <option value={3}>{isRu ? '3 места' : '3 Berths'}</option>
                      <option value={4}>{isRu ? '4 места (2 каюты)' : '4 Berths'}</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs text-slate-400 mb-1">{isRu ? 'Опыт яхтинга и пожелания' : 'Experience & Preferences'}</label>
                    <input
                      type="text"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder={isRu ? 'Иду впервые / Есть сертификат Day Skipper / Нужен трансфер...' : 'First-time sailor / Have Day Skipper / Need airport pickup...'}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="text-xs text-slate-400">
                    {isRu ? 'Прямая связь с организаторами: cosailmail@gmail.com' : 'Direct contact: cosailmail@gmail.com'}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 active:scale-95 transition-all"
                  >
                    {isSubmitting
                      ? (isRu ? 'Отправка...' : 'Sending...')
                      : (isRu ? `Подать заявку (${spots * expedition.pricePerPersonEur} €)` : `Request Booking (${spots * expedition.pricePerPersonEur} €)`)}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
