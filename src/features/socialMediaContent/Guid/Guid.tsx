'use client';
import { Button } from "@/shareComponent";
import { FaCheck, FaCopy } from "react-icons/fa";
import { FaCircleQuestion } from "react-icons/fa6";
import { useState } from "react";
import { guidMessages } from "../constants";

const Guid = () => {
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
        <h3 className="line-clamp-2 text-lg text-(--text-black) font-semibold mb-2">راهنمای جیبی: رفع ابهامات و پاسخ به سوالات رایج</h3>
        <p className='text-(--text-muted) text-justify mb-6'>طبیعی است که دوستان و آشنایان شما در ابتدا با شنیدن نام «تسهیلات» یا «اعتبار» دچار تردید شوند یا سوالاتی در ذهن داشته باشند. ما رایج‌ترین دغدغه‌های آن‌ها را همراه با بهترین پاسخ‌های شفاف و اطمینان‌بخش آماده کرده‌ایم. کافیست این جواب‌ها را کپی کنید و در پاسخ آن‌ها ارسال نمایید.</p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
            {guidMessages.map((item) => (
            <div
            key={item.id}
            className="border border-(--border-color) rounded-2xl flex flex-col h-full"
            >
            <div className="border-b border-(--border-color) flex items-center gap-4 p-4">
                <div className="rounded-full flex items-center justify-center">
                <FaCircleQuestion className="text-rose-500" />
                </div>

                <p className="font-bold text-(--text-black)">
                {item.question}
                </p>
            </div>

            <p className="text-(--text-muted) text-justify p-4 text-sm">
                <strong>آموزش به شما:</strong> {item.title}
            </p>

            <div className="text-justify bg-(--bg-gray-light) mx-4 mb-4 rounded-2xl p-4">
                <p className="md:max-w-[95%] whitespace-pre-line leading-7 text-(--text-black)">
                {item.answer}
                </p>
            </div>

            <div className="mx-6 my-4 mt-auto">
                <Button
                variant="outline"
                onClick={() => handleCopy(item.answer, item.id)}
                className="w-full"
                >
                {copiedId === item.id ? (
                    <>
                    <FaCheck className="pl-2" size={20} />
                    کپی شد
                    </>
                ) : (
                    <>
                    <FaCopy className="pl-2" size={20} />
                    کپی پاسخ
                    </>
                )}
                </Button>
            </div>
        </div>
            ))}
        </div>
    </div>
    );
}
 
export default Guid;