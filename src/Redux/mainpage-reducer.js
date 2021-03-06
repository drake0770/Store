import iphone11 from "../images/iphone/iphone11.jpeg";
import iphonex from "../images/iphone/iphonex.jpeg";
import ipad1812 from "../images/ipad/ipad1812.jpg";
import macpro2 from "../images/mac/macpro2.jpg";
import watch5 from "../images/watch/watch5.jpg";
import airpodspro from "../images/accestories/airpodspro.jpg";
import macair from "../images/mac/macair.jpg";

const initionalState = {
    bestsell: [
        {
            id: 1,
            type: 'iphone',
            model: 'Iphone 11 128gb',
            price: 1100,
            img: iphone11,
            description: 'iPhone 11 працює на новому швидкодіючому процесорі А13 третього покоління (до 1 трильйона операцій на секунду).\n' +
                '\n' +
                'Блок основної камери отримав два об\'єктива по 12 Мп, дозвіл фронтальної камери також 12 Мп. З\'явився режим нічної зйомки, а для перемикання між режимом фото і відео досить одного дотику. Крім того, автономність роботи iPhone 11 значно збільшилася.\n' +
                '\n' +
                'Завдяки посиленому захисту корпусу смартфон може знаходитись на глибині до 2 метрів протягом півгодини.',
            quantity: 6
        },
        {
            id: 2,
            type: 'iphone',
            model: 'Iphone X 64gb',
            price: 800,
            img: iphonex,
            description: '   IPhone X оснащенний діагональним 5,8-дюймовим кольоровим OLED-екраном, що підтримує широку кольорову гаму DCI-P3, sRGB та високий динамічний діапазон, а коефіцієнт контрастності 1 000 000:1. На дисплеї Super Retina використовується технологія True Tone як на iPad Pro, яка використовує датчики зовнішнього освітлення, щоб адаптувати баланс білого дисплея до навколишнього навколишнього світла. Хоча iPhone X не підтримує таку ж технологію ProMotion, як у дисплеях другого покоління iPad Pro, де дисплей забезпечує частоту оновлення 120 Гц, він робить вибірковий сенсорний вхід на 120 Гц.\n' +
                '\n' +
                '   IPhone X має два варіанти кольорів: сріблястий і космічний сірий. Передня і задня частина телефону зроблені із нержавіючої хірургічної сталі, що підвищує термін служби, а пристрій має скляний корпус. Корпус захищений від води та пилу за стандартом IP67.\n' +
                '\n' +
                '   В iPhone X міститься Apple-AION Bionic чип, який також використовується в iPhone 8 і 8 Plus, який є гекса-ядерним процесором із двома ядрами, оптимізованими для продуктивності, що на 25 % швидше, ніж процесор A10 Fusion, а також чотири оптимізовані за ефективністю ядер, які на 70 % швидше, ніж попереднє покоління. Він також оснащений першим Apple-розробленим графічним процесором і Neural Engine, який керує прискорювачем штучного інтелекту. Мікропроцесор A11 Bionic виготовлений на замовлення Apple на фабриках тайванської компанії TSMC.\n',
            quantity: 4
        },
        {
            id: 3,
            type: 'ipad',
            model: 'Apple iPad 2018 Wi-Fi 128GB 12.1',
            price: 400,
            img: ipad1812,
            description: 'Планшет 12.1 ", 2048x1536, TFT IPS\n' +
                'вбудована пам\'ять 128 Гб, без слота для карт пам\'яті\n' +
                'iOS, ОЗУ 2 Гб, процесор Apple A10 Fusion\n' +
                'Wi-Fi, Bluetooth\n' +
                'розміри 169.5x240x7.5 мм, вага 469 г\n' +
                'тилова камера 8 Мпікс\n' +
                'фронтальна камера 1.2 Мпікс',
            quantity: 4
        },
        {
            id: 4,
            type: 'mac',
            model: 'Mac Pro',
            price: 5000,
            img: macpro2,
            description: 'Чотири порти FireWire 800 (два на передній панелі, два на задній панелі). Пять портів USB 2.0 (два на передній панелі, три на задній панелі). Вхід і вихід «міні-джек» для аналогового стереосигналу. Розєм «міні-джек» для навушників на передній панелі. Оптичний цифровий аудіовхід і аудіовихід Toslink Два незалежних інтерфейси 10/100/1000BASE-T Ethernet (RJ-45). Bluetooth 2.1 +EDR. Плата AirPort Extreme з підтримкою Wi-Fi стандарту IEEE 802.11a/b/g.',
            quantity: 5
        }
    ],
    newItems: [
        {
            id: 1,
            type: 'watch',
            model: 'Apple watch 5',
            price: 590,
            img: watch5,
            description: 'Apple Watch — наручний годинник із додатковими функціями (розумний годинник) створений корпорацією Apple. Він поєднує у собі фітнес-трекер та різноманітні фукнції для стеження за здоров\'ям, що інтегруються з iOS та іншими продуктами і сервісами Apple. Для його повноцінної роботи потрібен смартфон сімейства iPhone 5 або більш пізньої модифікації, зокрема для здійснення дзвінків і надсилання текстових повідомлень. Наявніть wi-fi модулю дозволяє розумному годиннику виконувати певні обмежені функції без прив\'язки до iPhone.',
            quantity: 4
        },
        {
            id: 2,
            type: 'accestories',
            model: 'Airpods pro',
            price: 350,
            img: airpodspro,
            description: 'Watch — безпровідні Bluetooth навушники від компанії Apple Inc. Вперше представлені 13 грудня 2016 року.\n' +
                '\n' +
                'Окрім відтворення аудіо, Watch оснащені вбудованим мікрофоном, який відфільтровує фоновий шум. Таким чином через навушники зручно приймати телефонні дзвінки та спілкуватися з цифровим помічником Siri. Окрім цього, вбудовані оптичні сенсори реагують на дотики (подвійний дотик для павзи), а вбудований акселерометр на місцерозташування навушників (автоматична павза, якщо навушники виймаються з вух).',
            quantity: 4
        },
        {
            id: 3,
            type: 'mac',
            model: 'MacBook Air',
            price: 1000,
            img: macair,
            description: 'Улюблений для всіх Mac, в який можна легко закохатися заново. Ще більш тонкий і легкий, новий MacBook Air оснащений дисплеєм Retina з технологією True Tone, Touch ID, клавіатурою останнього покоління і трекпедом Force Touch. Представлений в трьох кольорах - сріблястому, золотом і «сірий космос». Це самий екологічний Mac. Зберігши його культовий дизайн, ми використовували для корпусу тільки перероблений алюміній.1 І це неймовірно зручний MacBook Air - він працює весь день без підзарядки і може впоратися з будь-якими завданнями.',
            quantity: 6
        }
    ]

};

export const mainPageReducer = (state = initionalState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}




