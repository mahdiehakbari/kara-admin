'use client';
import { Button } from "@/shareComponent";
import { useState } from "react";
import { groupMessages } from "../constants";
import { FaCheck, FaCopy } from "react-icons/fa";
import { FaTrashCanArrowUp } from "react-icons/fa6";

const FollowUp = () => {
    const [copiedId, setCopiedId] = useState<number | null>(null);

    const handleCopy = async (text: string, id: number) => {
    await navigator.clipboard.writeText(text);

    setCopiedId(id);

    setTimeout(() => {
        setCopiedId(null);
    }, 2000);
    };
      const hoverBorderClasses: Record<number, string> = {
    1: 'hover:border-(--primary)',
    2: 'hover:border-[#c2410c]',
    3: 'hover:border-[#b91c1c]',
  };
    return (  
        
        <div className='mx-8'>
            <h3 className="line-clamp-2 text-lg text-(--text-black) font-semibold mb-2">مدیریت لیست ۲۰ نفره</h3>
            <p className='text-(--text-muted) text-justify mb-6'>اگر افرادی که در لیست خود ثبت کرده‌اید را پیگیری نکنید، هم ظرفیت شما اشغال می‌ماند و هم پاداشی دریافت نمی‌کنید. از متن‌های زیر برای یادآوری هوشمندانه و ترغیب آن‌ها برای تکمیل فرآیند درمان استفاده کنید.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
                {groupMessages.map((item) => (
                <div
                    key={item.id}
                    className={`
                        border
                        border-(--border-color)
                        ${hoverBorderClasses[item.id]}
                        bg-(--surface)
                        rounded-2xl
                        p-5
                        flex
                        flex-col
                        justify-between
                        transition-colors
                    `}               
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
   <div className='flex gap-2 border border-(--border-color) bg-(--bg-gray-light) p-4 rounded-2xl mt-6'>
        <div>
          <FaTrashCanArrowUp className='text-3xl' size={18} />
        </div>
        <div>
          <p className='font-bold text-[14px]'>
          ترفند آزادسازی ظرفیت:
          </p>
          <p className='text-(--text-muted) text-[13px]'>
اگر بعد از ارسال پیام سوم متوجه شدید شخص مدعو قصد انجام کارهای دندانپزشکی را ندارد، تعارف نکنید! بلافاصله وارد پنل خود شوید و او را حذف دستی کنید. با این کار یک جایگاه آزاد می‌شود و می‌توانید شخص جدیدی را ثبت کنید تا شانس دریافت پاداش ویژه شما بالا برود.
          </p>
        </div>
      </div>
        </div>  
    );
}
 
export default FollowUp;