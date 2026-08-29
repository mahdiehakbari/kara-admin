import Link from 'next/link';

const Panel = () => {
  return (
    <div className='min-h-screen bg-(--background) p-4 md:p-8 ' dir='rtl'>
      <div className='max-w-4xl mx-auto space-y-6'>
        <div className='flex justify-center'>
          <img
            src='/assets/icons/panel-banner.jpeg'
            alt='panel-banner.jpeg'
            className='h-auto max-w-full rounded-2xl'
          />
        </div>
        <div className='relative overflow-hidden rounded-3xl bg-gradient-to-l from-blue-700 via-indigo-700 to-sky-600 p-8 md:p-10 text-white shadow-lg shadow-blue-500/10'>
          <div className='relative z-10 space-y-4'>
            <span className='inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-white/15 backdrop-blur-md border border-white/20'>
              طرح ملی دنتالیت
            </span>
            <h1 className='text-2xl md:text-3xl font-extrabold leading-snug'>
              🎉 فرصت طلایی و بی‌نظیر: درآمدزایی با معرفی در طرح ملی دنتالیت
            </h1>
            <p className='text-blue-100 text-sm md:text-base leading-relaxed max-w-3xl'>
              به «باشگاه معرفیندنتالیت» خوش آمدید! اگر به دنبال یک راه بسیار
              ساده، حرفه‌ای و مطمئن برای کسب درآمد هستید، این فرصت ویژه برای شما
              طراحی شده است. در این بخش، همه جزئیات به زبانی ساده توضیح داده شده
              است تا شما هم بتوانید به راحتی از این طرح بزرگ سود ببرید.
            </p>
          </div>
          <div className='absolute -left-10 -bottom-10 w-56 h-56 bg-white/10 rounded-full blur-2xl pointer-events-none' />
        </div>

        {/* What is Dentalit */}
        <div className='bg-(--surface) rounded-2xl p-6 md:p-8 border border-(--border-color) shadow-sm space-y-3'>
          <h2 className='text-lg font-bold  flex items-center gap-2'>
            <span className='w-2 h-2 rounded-full bg-(--primary) inline-block'></span>
            دنتالیت دقیقاً چیست؟
          </h2>
          <p className='text-(--text-muted) text-sm md:text-base leading-relaxed text-justify'>
            دنتالیت یک طرح بزرگ و ملی است که با مشارکت قدرتمند «بانک تجارت» و
            «جامعه دندانپزشکی ایران» پایه‌گذاری شده است. هدف این سامانه آن است
            که هیچ‌کس به دلیل هزینه‌های بالا، سلامت دهان و دندان خود را به تعویق
            نیندازد. در این پلتفرم، تمامی هم‌وطنان می‌توانند کاملاً به‌صورت برخط
            (آنلاین) تا سقف ۱۵۰ میلیون تومان اعتبار دندانپزشکی از بانک تجارت
            دریافت کنند و هزینه‌های درمان خود را در ۱۲ قسط پرداخت نمایند. (برای
            مشاهده راهنمای قدم‌به‌قدم و بسیار ساده این کار، می‌توانید به بخش
            <Link
              href='/panel/how-to-get-credit'
              className='text-(--primary) underline px-1'
            >
              راهنمای دریافت اعتبار
            </Link>
            در همین سامانه مراجعه کنید و آن را برای آشنایان خود نیز ارسال
            نمایید).
          </p>
        </div>

        {/* Exciting News */}
        <div className='bg-sky-50/80 border border-sky-100 rounded-2xl p-6 space-y-2'>
          <h3 className='text-base font-bold text-sky-950 flex items-center gap-2'>
            <span>✨</span> خبر هیجان‌انگیز: تجمیع اعتبارها برای درآمد بیشتر
            شما!
          </h3>
          <p className='text-sky-900/80 text-sm md:text-base leading-relaxed text-justify'>
            خبر بسیار جذاب این است که به‌زودی بانک‌های معتبر دیگری نیز به این
            طرح ملی اضافه خواهند شد. این یعنی مردم می‌توانند اعتبارهای دریافتی
            از چندین بانک مختلف را در سامانه دنتالیت روی هم بگذارند (تجمیع کنند)
            و قدرت پرداخت بسیار بالاتری داشته باشند. نتیجه این اتفاق برای شما
            چیست؟ مبالغ تراکنش‌ها به شدت بالا می‌رود و در نتیجه، درآمد شما از هر
            معرفی به شکل چشمگیری افزایش خواهد یافت!
          </p>
        </div>

        {/* Financial Benefits & Steps */}
        <div className='bg-(--surface) rounded-2xl p-6 md:p-8 border border-(--border-color) shadow-sm space-y-5'>
          <div className='space-y-2'>
            <h2 className='text-lg  font-bold '>
              مزایای مالی این طرح برای شما چیست؟
            </h2>
            <p className='text-(--text-muted) text-sm md:text-base leading-relaxed'>
              شما می‌توانید با معرفی افرادی که به خدمات دندانپزشکی نیاز دارند，
              درآمدهای فوق‌العاده‌ای کسب کنید. این فرآیند در سه گام بسیار ساده
              انجام می‌شود:
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='p-5 rounded-xl bg-(--background) border border-(--border-color) space-y-2'>
              <span className='text-xs font-bold text-(--primary) bg-blue-50 px-2 py-0.5 rounded'>
                گام اول
              </span>
              <p className='text-(--text-muted) text-sm leading-relaxed mt-2'>
                ۱. شماره موبایل همکار، دوست یا آشنای خود را در همین صفحه ثبت
                می‌کنید.
              </p>
            </div>

            <div className='p-5 rounded-xl bg-(--background) border border-(--border-color) space-y-2'>
              <span className='text-xs font-bold text-(--primary) bg-blue-50 px-2 py-0.5 rounded'>
                گام دوم
              </span>
              <p className='text-(--text-muted) text-sm leading-relaxed mt-2'>
                ۲. فرد معرفی‌شده در سامانه ثبت‌نام کرده و اعتبار خود را به سادگی
                دریافت می‌کند.
              </p>
            </div>

            <div className='p-5 rounded-xl bg-(--background) border border-(--border-color) space-y-2'>
              <span className='text-xs font-bold text-(--primary) bg-blue-50 px-2 py-0.5 rounded'>
                گام سوم
              </span>
              <p className='text-(--text-muted) text-sm leading-relaxed mt-2'>
                ۳. به محض اینکه این فرد به دندانپزشک مراجعه کرده و هزینه خدمات
                را بپردازد، پاداش شما به‌صورت خودکار به حساب کاربری‌تان در
                سامانه واریز می‌شود!
              </p>
            </div>
          </div>
        </div>

        {/* 1% Reward Highlight Box */}
        <div className='bg-amber-50 border border-amber-200/80 rounded-2xl p-6 md:p-8 space-y-4'>
          <div className='space-y-1'>
            <h2 className='text-lg font-black text-amber-950'>
              🚨 فرصت استثنایی و محدود: پاداش ۱ درصدی!
            </h2>
            <p className='text-amber-900/90 text-sm md:text-base leading-relaxed'>
              در حال حاضر، یک طرح تشویقی بی‌نظیر برای شما در نظر گرفته شده است.
              پاداش شما معادل ۱ درصد از کل مبلغ تراکنش فرد معرفی‌شده خواهد بود.
            </p>
          </div>

          <div className='p-4 rounded-xl bg-white/70 border border-amber-200/50 space-y-1.5'>
            <strong className='text-amber-950 font-bold text-sm block'>
              یک مثال شگفت‌انگیز:
            </strong>
            <p className='text-amber-900/80 text-sm leading-relaxed'>
              اگر فردی که معرفی کرده‌اید از سقف اعتبار خود استفاده کند و ۱۵۰
              میلیون تومان در مطب دندانپزشکی هزینه نماید، شما به راحتی ۱ میلیون
              و ۵۰۰ هزار تومان پاداش نقدی دریافت می‌کنید!
            </p>
          </div>

          <div className='p-4 rounded-xl bg-white/70 border border-amber-200/50 space-y-1.5'>
            <strong className='text-amber-950 font-bold text-sm block'>
              نکته بسیار مهم:
            </strong>
            <p className='text-amber-900/80 text-sm leading-relaxed'>
              این پاداش شگفت‌انگیز ۱ درصدی، تنها برای مدت کوتاهی فعال است و در
              آینده کاهش خواهد یافت. پس زمان را از دست ندهید و تا این فرصت باقی
              است، افراد بیشتری را دعوت کنید.
            </p>
          </div>
        </div>

        {/* Rules Section */}
        <div className='bg-(--surface) rounded-2xl p-6 md:p-8 border border-(--border-color) shadow-sm space-y-5'>
          <div className='space-y-1'>
            <h2 className='text-lg font-bold '>
              قوانین ساده و مهم برای استمرار درآمدزایی:
            </h2>
            <p className='text-slate-500 text-sm'>
              برای اینکه سیستم به بهترین شکل کار کند، چند قانون بسیار ساده وجود
              دارد:
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='p-5 rounded-xl bg-(--background) border border-(--border-color) space-y-1.5'>
              <h4 className='font-bold  text-sm'>ظرفیت لیست شما:</h4>
              <p className='text-(--text-muted) text-sm leading-relaxed'>
                شما یک جایگاه اختصاصی برای معرفی ۲۰ نفر در اختیار دارید.
              </p>
            </div>

            <div className='p-5 rounded-xl bg-(--background) border border-(--border-color) space-y-1.5'>
              <h4 className='font-bold  text-sm'>زمان طلایی ۳۰ روزه:</h4>
              <p className='text-(--text-muted) text-sm leading-relaxed'>
                هر فردی که ثبت می‌کنید، دقیقاً ۳۰ روز فرصت دارد تا اعتبار خود را
                دریافت کرده و در مطب دندانپزشکی هزینه کند.
              </p>
            </div>

            <div className='p-5 rounded-xl bg-(--background) border border-(--border-color) space-y-1.5'>
              <h4 className='font-bold  text-sm'>
                چگونه افراد بیشتری معرفی کنیم؟
              </h4>
              <p className='text-(--text-muted) text-sm leading-relaxed'>
                به محض اینکه شخص معرفی‌شده تراکنش خود را انجام دهد، دو اتفاق
                عالی می‌افتد: اول اینکه پاداش نقدی به شما تعلق می‌گیرد و دوم
                اینکه جایگاه او در لیست شما آزاد می‌شود! حالا می‌توانید یک نفر
                جدید را به جای او معرفی کنید و این چرخه درآمدزایی را بی‌نهایت
                ادامه دهید.
              </p>
            </div>

            <div className='p-5 rounded-xl bg-(--background) border border-(--border-color) space-y-1.5'>
              <h4 className='font-bold  text-sm'>برداشت درآمد:</h4>
              <p className='text-(--text-muted) text-sm leading-relaxed'>
                هر زمان که مجموع پاداش‌های شما در سامانه به مبلغ ۵ میلیون تومان
                برسد، امکان برداشت فراهم می‌شود و می‌توانید درخواست دهید تا این
                مبلغ مستقیماً به حساب بانکی‌تان واریز گردد.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Call-to-Action Text */}
        <div className='text-center py-4 bg-(--surface) rounded-2xl border border-(--border-color) p-6'>
          <p className='text-(--text-primary) font-semibold text-sm md:text-base leading-relaxed'>
            زمان به سرعت می‌گذرد؛ همین حالا اولین شماره را
            <Link
              href='/panel/customer-introduction'
              className='text-(--primary) underline'
            >
              {' '}
              ثبت کنید
            </Link>{' '}
            و از این فرصت بی‌نظیر برای خلق یک درآمد پایدار بهره‌مند شوید!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Panel;
