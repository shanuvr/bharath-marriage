import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-on-background dark:bg-surface-container-lowest w-full py-8 text-white">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter border-t border-tertiary-container pt-6">
        <div className="col-span-1 md:col-span-1">
          <div className="font-headline-lg text-heritage-gold text-lg mb-3">Bharath Marriage</div>
          <p className="text-surface-variant dark:text-soft-gray text-[11px] leading-relaxed mb-4">
            Connecting hearts across cultures since 1998. The most trusted name in Indian matrimony.
          </p>
          <div className="flex gap-3">
            <span className="material-symbols-outlined text-[18px] text-heritage-gold cursor-pointer hover:opacity-70">face_nod</span>
            <span className="material-symbols-outlined text-[18px] text-heritage-gold cursor-pointer hover:opacity-70">language</span>
            <span className="material-symbols-outlined text-[18px] text-heritage-gold cursor-pointer hover:opacity-70">camera</span>
          </div>
        </div>
        
        <div>
          <h4 className="text-heritage-gold text-[11px] font-bold tracking-wider mb-3">QUICK LINKS</h4>
          <ul className="space-y-1.5">
            <li><a className="text-surface-variant dark:text-soft-gray text-[11px] hover:text-white transition-colors" href="#">Success Stories</a></li>
            <li><a className="text-surface-variant dark:text-soft-gray text-[11px] hover:text-white transition-colors" href="#">Safety Tips</a></li>
            <li><a className="text-surface-variant dark:text-soft-gray text-[11px] hover:text-white transition-colors" href="#">Matrimony Blog</a></li>
            <li><a className="text-surface-variant dark:text-soft-gray text-[11px] hover:text-white transition-colors" href="#">Affiliates</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-heritage-gold text-[11px] font-bold tracking-wider mb-3">SUPPORT</h4>
          <ul className="space-y-1.5">
            <li><a className="text-surface-variant dark:text-soft-gray text-[11px] hover:text-white transition-colors" href="#">Contact Support</a></li>
            <li><a className="text-surface-variant dark:text-soft-gray text-[11px] hover:text-white transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="text-surface-variant dark:text-soft-gray text-[11px] hover:text-white transition-colors" href="#">Terms of Use</a></li>
            <li><a className="text-surface-variant dark:text-soft-gray text-[11px] hover:text-white transition-colors" href="#">Cookie Policy</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-heritage-gold text-[11px] font-bold tracking-wider mb-3">NEWSLETTER</h4>
          <p className="text-surface-variant dark:text-soft-gray text-[11px] leading-relaxed mb-3">
            Get the latest tips on finding your perfect match.
          </p>
          <div className="flex">
            <input 
              className="bg-tertiary text-white border-none rounded-l-lg p-2 text-xs w-full focus:ring-0" 
              placeholder="Email address" 
              type="email" 
            />
            <button className="bg-heritage-gold text-on-secondary-fixed rounded-r-lg px-3 transition-all hover:brightness-110 cursor-pointer flex items-center justify-center">
              <span className="material-symbols-outlined text-[16px]">send</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-8 pt-4 border-t border-tertiary/40 text-center">
        <p className="text-surface-variant dark:text-soft-gray text-[10px] opacity-60">
          © 2024 Bharath Marriage. Premium Matrimony Services. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
