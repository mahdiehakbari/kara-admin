'use client';
import { useTranslation } from 'react-i18next';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaMailBulk,
  FaEnvelope,
} from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <div className=' flex flex-col items-center max-w-6xl mx-4 md:mx-auto'>
      <div className="bg-[url('/assets/icons/mapimg.png')] bg-cover bg-center h-96  w-full rounded-2xl mb-6"></div>
      <div className=' w-full bg-(--surface) border border-(--border-color) rounded-2xl p-6 transition-colors my-6'>
        <div className='flex items-center w-full text-right gap-3 mb-6'>
          <FaMapMarkerAlt className='text-primary text-xl' />
          <span>
            آدرس: تهران - شهرک قدس (غرب) - ایوانک - خیابان شجریان شمالی (فلامک)
            - خیابان چهارم - پلاک 22 - طبقه 1 - واحد 1
          </span>
        </div>
        <div className='flex items-center w-full text-right gap-3 mb-6'>
          <FaMailBulk className='text-primary text-xl' />
          <span>کدپستی : 1467734113</span>
        </div>
        <div className='flex items-center w-full text-right gap-3 '>
          <FaEnvelope className='text-primary text-xl' />
          <span>
            ایمیل:{' '}
            <a href='mailto:info@dentalit.ir' className='text-primary'>
              info@dentalit.ir
            </a>
          </span>
        </div>
      </div>
      <div className=' w-full bg-(--surface) border border-(--border-color) rounded-2xl p-6 transition-colors mb-6'>
        <div className='flex justify-between'>
          <div>
            <h2 className='text-(--text-black) font-bold text-[17px] mb-2'>
              پشتیبانی دریافت و فعال‌سازی اعتبار (اپلیکیشن باجت):
            </h2>
            <p className='text-(--text-muted)  text-[15px] leading-relaxed  mb-1'>
              اگر در مراحل اعتبارسنجی، افتتاح حساب، بارگذاری مدارک یا تخصیص
              اعتبار در اپلیکیشن باجت با مشکلی مواجه شده‌اید، با پشتیبانی باجت
              تماس بگیرید:
            </p>
          </div>
          <div className='flex items-center gap-2 mb-2'>
            <div className='flex flex-col'>
              <span className='text-(--text-muted) text-[13px]'>
                تلفن پشتیبانی باجت:
              </span>
              <div className='flex items-center gap-2'>
                <FiPhone className='text-(--primary-text) text-[14px]' />
                <a
                  href='tel:02125961300'
                  className='text-(--primary-text) font-bold text-[16px]  direction-ltr cursor-pointer'
                  dir='ltr'
                >
                  ۰۲۱-۲۵۹۶۱۳۰۰
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div className='flex justify-between'>
          <div>
            {' '}
            <h2 className='text-(--text-black) font-bold text-[17px] mb-2'>
              {' '}
              پشتیبانی خدمات و سامانه دنتالیت:
            </h2>
            <p className='text-(--text-muted) font-bold text-[13px] leading-relaxed'>
              {' '}
              برای سوالات مربوط به کیف پول دنتالیت، انتخاب پزشکان، ثبت تراکنش در
              مطب و شرایط تسویه حساب با پزشکان و کلینیک ها، در خدمت شما هستیم.
            </p>
          </div>

          <div className='flex flex-col'>
            <span className='text-(--text-muted) text-[13px]'>
              تلفن پشتیبانی دنتالیت:
            </span>
            <div className='flex items-center gap-2'>
              <FiPhone className='text-(--primary-text) text-[16px]' />
              <a
                href='tel:90000644'
                className='text-(--text-black) font-bold text-[16px] direction-ltr cursor-pointer w-full text-right'
                dir='ltr'
              >
                ۹۰۰۰۰۶۴۴
              </a>
            </div>
            <div className='flex items-center gap-2'>
              <FiPhone className='text-(--primary-text) text-[16px]' />
              <a
                href='tel:02179572828'
                className='text-(--primary-text) font-bold text-[16px]  direction-ltr cursor-pointer'
                dir='ltr'
              >
                ۰۲۱-۷۹۵۷۲۸۲۸
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
