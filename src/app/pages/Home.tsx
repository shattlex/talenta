import { BellRing, BookOpen, CalendarDays, Gift, Mail, MapPin, Phone, Settings, Users, Award, TrendingUp, Bookmark, MessageCircleQuestion, MessageCircleMore, Plane, Clock3 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const kpis = [
  { label: "Сотрудников онлайн", value: "1,247", delta: "+12%", icon: Users, iconColor: "text-blue-500", iconBg: "bg-blue-50" },
  { label: "Достижений", value: "8", delta: "+2", icon: Award, iconColor: "text-amber-500", iconBg: "bg-amber-50" },
  { label: "Курсов пройдено", value: "12", delta: "3 в процессе", icon: BookOpen, iconColor: "text-violet-500", iconBg: "bg-violet-50" },
  { label: "Коинов", value: "2,450", delta: "+350", icon: TrendingUp, iconColor: "text-emerald-500", iconBg: "bg-emerald-50" },
];

const favorites = ["Лучший сотрудник месяца", "Новая система мотивации", "Курс «Основы»", "Голосование за проекты"];

const birthdays = [
  { name: "Сидорова Елена", when: "Сегодня", avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=120&auto=format&fit=crop" },
  { name: "Иванов Алексей", when: "Завтра", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&auto=format&fit=crop" },
  { name: "Козлова Мария", when: "24 июня", avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=120&auto=format&fit=crop" },
];

const WEEKDAYS = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

function buildMonthCells(year: number, monthIndex: number): Array<number | null> {
  const firstDay = new Date(year, monthIndex, 1);
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const mondayFirstOffset = (firstDay.getDay() + 6) % 7;

  const cells: Array<number | null> = [];
  for (let i = 0; i < mondayFirstOffset; i += 1) {
    cells.push(null);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(day);
  }

  while (cells.length % 7 !== 0) {
    cells.push(null);
  }

  return cells;
}

export default function Home() {
  const now = new Date();
  const calendarYear = now.getFullYear();
  const calendarMonthIndex = now.getMonth();
  const activeDay = now.getDate();
  const monthCells = buildMonthCells(calendarYear, calendarMonthIndex);
  const monthName = now.toLocaleString("ru-RU", { month: "long" });
  const monthTitle = `${monthName.charAt(0).toUpperCase()}${monthName.slice(1)} ${calendarYear}`;
  const todayLabel = now.toLocaleDateString("ru-RU", { day: "numeric", month: "long" });

  return (
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_320px] gap-6 pb-10">
      <div className="space-y-6">
        <section className="rounded-[28px] bg-gradient-to-r from-[#fdeff1] via-[#fff5f3] to-[#fbfbfb] border border-[#f4e7ea] px-8 py-7">
          <h2 className="text-[40px] leading-[1.05] font-extrabold text-[#E61730] tracking-tight">Доброе утро, Дмитрий</h2>
          <p className="mt-2 text-[15px] text-slate-500">Сегодня: {todayLabel}. У вас 2 встречи и 3 новых уведомления.</p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((item) => (
            <article key={item.label} className="bg-white rounded-[24px] p-5 border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${item.iconBg}`}>
                <item.icon className={`w-5 h-5 ${item.iconColor}`} strokeWidth={2} />
              </div>
              <div className="mt-4 text-[40px] leading-none font-extrabold text-slate-900 tracking-tight">{item.value}</div>
              <div className="mt-2 text-[15px] text-slate-500 font-medium">{item.label}</div>
              <div className="mt-2 text-[14px] font-semibold text-emerald-600">{item.delta}</div>
            </article>
          ))}
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] min-h-[340px]">
            <h3 className="text-[18px] font-extrabold tracking-tight text-slate-900 mb-6 flex items-center gap-2">
              <Bookmark className="w-7 h-7 text-amber-500" />
              Избранное
            </h3>
            <ul className="space-y-5">
              {favorites.map((item) => (
                <li key={item} className="flex items-center justify-between gap-3">
                  <span className="text-[16px] leading-none text-red-600">•</span>
                  <span className="flex-1 text-[16px] leading-[1.15] font-semibold text-slate-900">{item}</span>
                  <button className="text-[18px] font-semibold text-red-600 hover:text-red-700">Перейти</button>
                </li>
              ))}
            </ul>
          </article>

          <article className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] min-h-[340px]">
            <h3 className="text-[18px] font-extrabold tracking-tight text-slate-900 mb-4 flex items-center gap-2">
              <BellRing className="w-7 h-7 text-blue-500" />
              Новости
            </h3>
            <div className="flex gap-5 text-[18px] font-semibold mb-4">
              <button className="text-slate-900 border-b-2 border-[#E61730] pb-1">Все новости</button>
              <button className="text-slate-400">Региональные</button>
            </div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
              alt="Новости"
              className="w-full h-[180px] rounded-[16px] object-cover"
            />
            <h4 className="mt-4 text-[18px] leading-[1.15] font-extrabold text-slate-900">Более 470 новых магазинов в Португалии</h4>
            <p className="mt-2 text-[18px] leading-[1.3] text-slate-500">В этом квартале компания значительно расширила свое присутствие в регионе, открыв рекордное количество новых точек.</p>
            <div className="mt-3 text-[16px] text-slate-400 flex items-center gap-2">
              <Clock3 className="w-5 h-5" />
              21 июня, 10:30
            </div>
          </article>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-[18px] font-extrabold tracking-tight text-slate-900 flex items-center gap-2">
                <CalendarDays className="w-7 h-7 text-blue-500" />
                Календарь
              </h3>
              <div className="text-[18px] font-semibold text-slate-700">{monthTitle}</div>
            </div>
            <div className="grid grid-cols-7 gap-3 text-center text-[14px] text-slate-400 mb-3">
              {WEEKDAYS.map((d) => <div key={d}>{d}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-3 text-center text-[16px] text-slate-800 font-medium">
              {monthCells.map((day, index) => (
                <div key={`${day ?? "blank"}-${index}`} className={day === activeDay ? "bg-red-600 text-white rounded-[14px] py-2 font-bold" : "py-2"}>
                  {day ?? ""}
                </div>
              ))}
            </div>
          </article>

          <article className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <h3 className="text-[18px] font-extrabold tracking-tight text-slate-900 mb-5 flex items-center gap-2">
              <Gift className="w-7 h-7 text-pink-500" />
              Дни рождения
            </h3>
            <div className="space-y-4">
              {birthdays.map((item) => (
                <div key={item.name} className="flex items-center gap-4">
                  <ImageWithFallback src={item.avatar} alt={item.name} className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <p className="text-[18px] leading-tight font-extrabold text-slate-900">{item.name}</p>
                    <p className="text-[18px] text-slate-400">{item.when}</p>
                  </div>
                  <button className="ml-auto rounded-full bg-pink-50 text-pink-600 text-[16px] font-semibold px-5 py-2">Поздравить</button>
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>

      <aside className="space-y-6">
        <section className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <h3 className="text-[16px] font-extrabold tracking-tight text-slate-900 mb-4">Контактная информация</h3>
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-600 px-3 py-1 text-[14px] font-semibold"><span className="w-2 h-2 bg-emerald-500 rounded-full" />В сети</span>
            <span className="text-[14px] text-slate-500">218</span>
          </div>
          <div className="space-y-3 text-[16px]">
            <InfoRow label="Табельный номер" value="73730" />
            <InfoRow label="Дата последнего входа" value="14.01.24 18:14" />
            <InfoRow label="Дата рождения" value="02.09.1995 г." />
            <InfoRow label="В компании" value="2 года 3 месяца" />
          </div>
          <div className="h-px bg-slate-100 my-5" />
          <div className="space-y-3 text-[16px] text-slate-700">
            <div className="flex items-center gap-2"><Mail className="w-5 h-5 text-slate-400" /> d.kuznetsov@talenta.ru</div>
            <div className="flex items-center gap-2"><Phone className="w-5 h-5 text-slate-400" /> +7 (495) 300 2500</div>
            <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-slate-400" /> г. Самара</div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-5">
            <button className="h-12 rounded-2xl bg-slate-50 text-slate-700 text-[14px] font-semibold">Редактировать</button>
            <button className="h-12 rounded-2xl bg-slate-50 text-slate-700 text-[14px] font-semibold flex items-center justify-center gap-2"><Settings className="w-4 h-4" /> Настройки</button>
          </div>
        </section>

        <section className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <h3 className="text-[16px] font-extrabold tracking-tight text-slate-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-emerald-500" />
            График отпусков
          </h3>
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl px-4 py-3 flex items-center justify-between">
            <span className="text-[18px] text-slate-700">Остаток дней</span>
            <span className="text-[40px] font-extrabold text-emerald-600">20</span>
          </div>
          <div className="mt-4 rounded-2xl border border-slate-100 px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-[14px] font-extrabold text-slate-900">Отпуск</p>
              <p className="text-[16px] text-slate-500">01.05 - 14.05.2026</p>
            </div>
            <span className="text-[18px] text-slate-400">14 дн.</span>
          </div>
        </section>

        <section className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <h3 className="text-[16px] font-extrabold tracking-tight text-slate-900 mb-4">Поддержка</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center"><MessageCircleQuestion className="w-5 h-5" /></div>
              <div>
                <p className="text-[14px] font-extrabold text-slate-900 leading-tight">Справочный центр</p>
                <p className="text-[16px] text-slate-500">База знаний и ответы на частые вопросы</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center"><MessageCircleMore className="w-5 h-5" /></div>
              <div>
                <p className="text-[14px] font-extrabold text-slate-900 leading-tight">Онлайн поддержка</p>
                <p className="text-[16px] text-slate-500">Чат с HR и IT специалистами</p>
              </div>
            </div>
          </div>
        </section>
      </aside>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-slate-500">{label}:</span>
      <span className="font-semibold text-slate-900 text-right">{value}</span>
    </div>
  );
}
