import React, { useState } from 'react';
import { X, Copy, Check, Cloud, ShieldCheck, Terminal, FileCode, Download, ExternalLink, Globe } from 'lucide-react';
import { Language } from '../types';

interface CloudflareModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const CloudflareModal: React.FC<CloudflareModalProps> = ({ isOpen, onClose, lang }) => {
  const [copiedFile, setCopiedFile] = useState<string | null>(null);

  if (!isOpen) return null;

  const isRu = lang === 'ru';
  const isTr = lang === 'tr';

  const redirectsContent = `/*    /index.html   200`;

  const headersContent = `/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(self "https://nav.cosail.org")
  Access-Control-Allow-Origin: *

/flutter_service_worker.js
  Cache-Control: no-cache, no-store, must-revalidate
  Content-Type: application/javascript; charset=utf-8

/manifest.json
  Cache-Control: no-cache, no-store, must-revalidate
  Content-Type: application/json; charset=utf-8

/assets/*
  Cache-Control: public, max-age=31536000, immutable`;

  const buildCommand = `flutter build web --release --pwa-strategy=offline-first --web-renderer canvaskit`;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFile(id);
    setTimeout(() => setCopiedFile(null), 2500);
  };

  const handleDownload = (filename: string, content: string) => {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0F2C59]/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-[#2E80FF]/20 flex flex-col overflow-hidden text-[#0F2C59]">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-[#0F2C59] to-[#16386d] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2E80FF]/20 border border-[#2E80FF]/40 flex items-center justify-center text-[#2E80FF]">
              <Cloud className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-heading tracking-tight text-white">
                {isRu
                  ? 'Архитектура Cloudflare Pages & Развертывание'
                  : isTr
                  ? 'Cloudflare Pages Mimarisi ve Dağıtım'
                  : 'Cloudflare Pages Architecture & Deployment'}
              </h3>
              <p className="text-xs text-[#F0F6FF]/80 mt-0.5">
                nav.cosail.org • cosail.org • Flutter Web Offline-First
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Section 1: Flutter Web Production Build */}
          <div className="p-4 rounded-xl bg-[#F0F6FF] border border-[#2E80FF]/20">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 font-heading font-bold text-[#0F2C59]">
                <Terminal className="w-4 h-4 text-[#2E80FF]" />
                <span>
                  {isRu
                    ? '1. Сборка Flutter Web для продакшена'
                    : isTr
                    ? '1. Flutter Web Canlı Sürüm Derlemesi'
                    : '1. Flutter Web Production Build'}
                </span>
              </div>
              <button
                onClick={() => handleCopy(buildCommand, 'build')}
                className="px-2.5 py-1 rounded bg-white hover:bg-slate-50 border border-slate-200 text-xs font-semibold text-[#0F2C59] flex items-center gap-1.5 transition-colors"
              >
                {copiedFile === 'build' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#10B981]" />
                    <span className="text-[#10B981]">{isRu ? 'Скопировано' : isTr ? 'Kopyalandı' : 'Copied'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#64748B]" />
                    <span>{isRu ? 'Копировать' : isTr ? 'Kopyala' : 'Copy'}</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-3 rounded-lg bg-[#0F2C59] text-[#F0F6FF] font-mono text-xs overflow-x-auto selection:bg-[#2E80FF]">
              {buildCommand}
            </pre>
            <ul className="mt-2.5 space-y-1 text-xs text-[#64748B] list-disc list-inside">
              <li>
                <strong>Web Renderer:</strong> <code className="text-[#0F2C59]">canvaskit</code> (
                {isRu
                  ? 'максимальная точность морских линий, румбов и текста'
                  : isTr
                  ? 'rotalar ve deniz haritası metinleri için yüksek hassasiyet'
                  : 'optimal smooth rendering for nautical rhumb lines and cartography'}
                )
              </li>
              <li>
                <strong>Base href:</strong> <code className="text-[#0F2C59]">&lt;base href="/"&gt;</code>{' '}
                {isRu ? 'в index.html для корня поддомена nav.cosail.org' : 'in index.html for root of nav.cosail.org'}
              </li>
              <li>
                <strong>Build output:</strong> <code className="text-[#0F2C59]">build/web</code>
              </li>
            </ul>
          </div>

          {/* Section 2: DNS in Cloudflare */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 font-heading font-bold text-[#0F2C59] mb-3">
              <Globe className="w-4 h-4 text-[#2E80FF]" />
              <span>
                {isRu
                  ? '2. Настройка DNS записей в Cloudflare'
                  : isTr
                  ? '2. Cloudflare DNS Kayıtları'
                  : '2. Cloudflare DNS Setup'}
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-[#F0F6FF] text-[#0F2C59] font-bold">
                  <tr>
                    <th className="p-2.5 border-b">{isRu ? 'Тип' : isTr ? 'Tür' : 'Type'}</th>
                    <th className="p-2.5 border-b">{isRu ? 'Имя' : isTr ? 'Ad' : 'Name'}</th>
                    <th className="p-2.5 border-b">{isRu ? 'Цель (Target)' : isTr ? 'Hedef' : 'Target'}</th>
                    <th className="p-2.5 border-b">{isRu ? 'Прокси (Cloud)' : isTr ? 'Proxy' : 'Proxy Status'}</th>
                    <th className="p-2.5 border-b">TTL</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono">
                  <tr>
                    <td className="p-2.5 font-bold text-[#2E80FF]">CNAME</td>
                    <td className="p-2.5">nav</td>
                    <td className="p-2.5">&lt;project-name&gt;.pages.dev</td>
                    <td className="p-2.5 text-[#FF6B4A] font-sans font-semibold">
                      Proxied (Orange Cloud)
                    </td>
                    <td className="p-2.5 font-sans">Auto</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-[#2E80FF]">A / CNAME</td>
                    <td className="p-2.5">@ (cosail.org)</td>
                    <td className="p-2.5">Origin IP / Host</td>
                    <td className="p-2.5 text-[#FF6B4A] font-sans font-semibold">
                      Proxied (Orange Cloud)
                    </td>
                    <td className="p-2.5 font-sans">Auto</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-[#10B981] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>
                {isRu
                  ? 'SSL/TLS: Full (Strict) + включить Always Use HTTPS в Edge Certificates'
                  : isTr
                  ? 'SSL/TLS: Full (Strict) + Edge Certificates üzerinden Always Use HTTPS etkin'
                  : 'SSL/TLS: Full (Strict) + Enable Always Use HTTPS in Edge Certificates'}
              </span>
            </div>
          </div>

          {/* Section 3: _redirects File */}
          <div className="p-4 rounded-xl bg-[#F0F6FF] border border-[#2E80FF]/20">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 font-heading font-bold text-[#0F2C59]">
                <FileCode className="w-4 h-4 text-[#2E80FF]" />
                <span>
                  {isRu
                    ? '3. Файл _redirects (SPA Fallback для Cloudflare Pages)'
                    : isTr
                    ? '3. _redirects Dosyası (Cloudflare Pages SPA Fallback)'
                    : '3. _redirects File (SPA Fallback for Cloudflare Pages)'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopy(redirectsContent, 'redirects')}
                  className="px-2.5 py-1 rounded bg-white hover:bg-slate-50 border border-slate-200 text-xs font-semibold text-[#0F2C59] flex items-center gap-1.5 transition-colors"
                >
                  {copiedFile === 'redirects' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#10B981]" />
                      <span className="text-[#10B981]">{isRu ? 'Скопировано' : isTr ? 'Kopyalandı' : 'Copied'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#64748B]" />
                      <span>{isRu ? 'Копировать' : isTr ? 'Kopyala' : 'Copy'}</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => handleDownload('_redirects', redirectsContent)}
                  className="px-2.5 py-1 rounded bg-[#2E80FF] hover:bg-[#206fe0] text-xs font-semibold text-white flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isRu ? 'Скачать' : isTr ? 'İndir' : 'Download'}</span>
                </button>
              </div>
            </div>
            <p className="text-xs text-[#64748B] mb-2">
              {isRu
                ? 'Разместите в build/web/_redirects, чтобы при перезагрузке страниц не возникало ошибки 404.'
                : isTr
                ? 'Sayfa yenilemelerinde 404 hatasını önlemek için build/web/_redirects konumuna yerleştirin.'
                : 'Place in build/web/_redirects to prevent 404s when navigating or refreshing.'}
            </p>
            <pre className="p-3 rounded-lg bg-[#0F2C59] text-[#F0F6FF] font-mono text-xs overflow-x-auto selection:bg-[#2E80FF]">
              {redirectsContent}
            </pre>
          </div>

          {/* Section 4: _headers File */}
          <div className="p-4 rounded-xl bg-[#F0F6FF] border border-[#2E80FF]/20">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 font-heading font-bold text-[#0F2C59]">
                <FileCode className="w-4 h-4 text-[#FF6B4A]" />
                <span>
                  {isRu
                    ? '4. Файл _headers (Безопасность, GPS, PWA Service Worker & Тайлы OpenSeaMap)'
                    : isTr
                    ? '4. _headers Dosyası (Güvenlik, GPS, PWA Service Worker & OpenSeaMap)'
                    : '4. _headers File (Security, GPS Permissions, PWA & OpenSeaMap)'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopy(headersContent, 'headers')}
                  className="px-2.5 py-1 rounded bg-white hover:bg-slate-50 border border-slate-200 text-xs font-semibold text-[#0F2C59] flex items-center gap-1.5 transition-colors"
                >
                  {copiedFile === 'headers' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#10B981]" />
                      <span className="text-[#10B981]">{isRu ? 'Скопировано' : isTr ? 'Kopyalandı' : 'Copied'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#64748B]" />
                      <span>{isRu ? 'Копировать' : isTr ? 'Kopyala' : 'Copy'}</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => handleDownload('_headers', headersContent)}
                  className="px-2.5 py-1 rounded bg-[#2E80FF] hover:bg-[#206fe0] text-xs font-semibold text-white flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isRu ? 'Скачать' : isTr ? 'İndir' : 'Download'}</span>
                </button>
              </div>
            </div>
            <p className="text-xs text-[#64748B] mb-2">
              {isRu
                ? 'Разместите в build/web/_headers. Отключает кэширование service worker, разрешает геолокацию на nav.cosail.org и кэширует ассеты WMM 2025.'
                : isTr
                ? 'build/web/_headers konumuna yerleştirin. Service worker önbelleğini anında günceller, GPS izinlerini yapılandırır ve WMM 2025 varlıklarını önbelleğe alır.'
                : 'Place in build/web/_headers. Prevents stale service worker caches, allows GPS geolocation on nav.cosail.org, and enables long-term caching for WMM assets.'}
            </p>
            <pre className="p-3 rounded-lg bg-[#0F2C59] text-[#F0F6FF] font-mono text-xs overflow-x-auto selection:bg-[#2E80FF] max-h-48">
              {headersContent}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-[#64748B]">
            {isRu
              ? 'Файлы уже сгенерированы в корне сборщика и готовы к экспорту'
              : isTr
              ? 'Yapılandırma dosyaları hazır ve doğrudan dışa aktarılabilir'
              : 'Files pre-packaged and ready for Cloudflare Pages deployment'}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#0F2C59] hover:bg-[#16386d] text-white text-xs font-semibold transition-colors"
          >
            {isRu ? 'Закрыть окно' : isTr ? 'Kapat' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
