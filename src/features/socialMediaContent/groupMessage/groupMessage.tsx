'use client';
import { Button } from "@/shareComponent";
import { FaCheck, FaCopy, FaLightbulb } from "react-icons/fa";
import { smsMessages } from "../constants";
import { useState } from "react";

const GroupMessage = () => {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopy = async (text: string, id: number) => {
    await navigator.clipboard.writeText(text);

    setCopiedId(id);

    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };
    return ( 
        <div className='mx-8'>
            <h3 className="line-clamp-2 text-lg text-(--text-black) font-semibold mb-2">ارسال در گروه‌های تلگرامی و واتس‌اپ</h3>
            <p className='text-(--text-muted) text-justify mb-6'>این متن‌ها طوری طراحی شده‌اند که حس «کمک کردن و دلسوزی» را منتقل کنند. آن‌ها را در گروه‌های خانوادگی، کانال‌های کاری یا گروه‌های مجتمع مسکونی خود کپی کنید تا افراد نیازمند به خدمات دندانپزشکی، شماره خود را به شما بدهند.</p>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
              {smsMessages.map((item) => (
                <div
                  key={item.id}
                  className='border border-(--border-color) bg-(--surface) rounded-2xl p-5 flex flex-col justify-between'
                >
                  <p
                    className={`inline-flex w-fit rounded-sm px-4 py-1 mb-4 font-bold text-xs ${item.titleClass} ${item.bgClass}`}
                  >
                    {item.title}
                  </p>

                  <p className='whitespace-pre-line leading-7 bg-(--bg-gray-light)  text-(--text-black) border border-(--border-color) p-2 rounded-2xl'>
                    {item.text}
                  </p>

                  <Button
                    onClick={() => handleCopy(item.text, item.id)}
                    className='mt-6 w-full flex items-center justify-center gap-2'
                  >
                    {copiedId === item.id ? (
                      <>
                        <FaCheck size={18} />
                        کپی شد
                      </>
                    ) : (
                      <>
                        <FaCopy size={18} />
                       کپی متن پیام
                      </>
                    )}
                  </Button>
                </div>
              ))}
            </div>
                      <div className='flex gap-2 border border-[#fef3c7] bg-[#fffbeb] p-4 rounded-2xl mt-6'>
            <div>
              <FaLightbulb className='text-yellow-500 text-3xl' size={18} />
            </div>
            <div>
              <p className='font-bold text-yellow-700 text-[14px]'>
               
ترفند معرفی موفق:
              </p>
              <p className='text-yellow-700 text-[13px]'>
هیچ‌گاه در پیام‌های خود به پاداش یا سود خودتان اشاره نکنید. تمرکز پیام باید ۱۰۰٪ روی حل مشکل دندان‌پزشکی شخص مقابل و مزایای فوق‌العاده بانک تجارت (۱۵۰ میلیون و اقساط ۱۲ ماهه) باشد.
              </p>
            </div>
          </div>
        </div> 
    );
}
 
export default GroupMessage;