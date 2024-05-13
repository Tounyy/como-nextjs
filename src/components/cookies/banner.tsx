'use client';

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { usePostHog } from "posthog-js/react";

export function cookieConsentGiven(): string {
  const consent = localStorage.getItem('cookie_consent');
  return consent ?? 'undecided';
}

const Banner: React.FC = () => {
  const [consentGiven, setConsentGiven] = useState<string>('');
  const posthog = usePostHog();
  const router = useRouter();

  useEffect(() => {
    const currentConsent = cookieConsentGiven();
    setConsentGiven(currentConsent);
    document.body.style.overflow = currentConsent === 'undecided' ? 'hidden' : 'auto';
  }, []);

  useEffect(() => {
    if (consentGiven !== '') {
      posthog.set_config({ persistence: consentGiven === 'yes' ? 'localStorage+cookie' : 'memory' });
    }
  }, [consentGiven]);

  useEffect(() => {
    document.body.style.overflow = consentGiven === 'undecided' ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [consentGiven]);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookie_consent', 'yes');
    setConsentGiven('yes');
  };

  const handleDeclineCookies = () => {
    localStorage.setItem('cookie_consent', 'no');
    setConsentGiven('no');
  };

  const navigateToPrivacyPolicy = () => {
    router.push('/souhlas-s-zpracovnim-osobnich-udaju/');
  };

  return (
    <div>
      {consentGiven === 'undecided' && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
          <section className="fixed inset-0 z-50 flex items-center justify-center p-2">
            <div className="max-[100px] w-[700px] bg-white border border-gray-200 dark:bg-white-800 dark:border-gray-700 rounded-2xl mx-2 p-12">
              <h2 className="text-2xl font-semibold text-black-800 dark:text-black text-center">🍪 Spravovat Souhlas</h2>
              <p className="mt-4 text-sm text-black-600 dark:text-black-300 text-left">
                Abychom poskytli co nejlepší služby, používáme k ukládání a/nebo přístupu k informacím o zařízení, technologie jako jsou soubory cookies. Souhlas s těmito technologiemi nám umožní zpracovávat údaje, jako je chování při procházení nebo jedinečná ID na tomto webu. Nesouhlas nebo odvolání souhlasu může nepříznivě ovlivnit určité vlastnosti a funkce.
              </p>
              <div className="flex items-center justify-center mt-4 gap-x-4 shrink-0">
                <button className="text-xs text-gray-800 underline transition-colors duration-300 dark:text-white dark:hover:text-gray-400 hover:text-gray-600 focus:outline-none" onClick={navigateToPrivacyPolicy}>
                  Souhlas s zpracovním osobních údajů
                </button>
                <div className="flex flex-col sm:flex-row items-right justify-between gap-x-4 gap-y-2">
                  <button 
                    className="text-xs bg-[#008DD2] font-medium rounded-lg text-white px-4 py-2.5 transition-colors duration-300 hover:bg-[#2d547d] focus:bg-[#2d547d]"
                    onClick={handleAcceptCookies}
                  >
                    SOUHLASIT SE VŠÍM
                  </button>
                  <button 
                    className="text-xs bg-white font-medium rounded-lg border-2 border-gray-400 text-black px-4 py-2.5 transition-colors duration-300 hover:bg-gray-400 focus:bg-bg-gray-400"
                    onClick={handleDeclineCookies}
                  >
                    ODMÍTNOUT
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Banner;