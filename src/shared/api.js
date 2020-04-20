const data = ['Carlsen, Magnus', 'Caruana, Fabiano', 'Ding, Liren', 'Giri, Anish', 'Mamedyarov, Shakhriyar',
              'Vachier-Lagrave, Maxime', 'Anand, Viswanathan', 'Nepomniachtchi, Ian', 'Grischuk, Alexander',
              'Aronian, Levon', 'So, Wesley', 'Yu, Yangyi', 'Radjabov, Teimour', 'Kramnik, Vladimir',
              'Karjakin, Sergey', 'Nakamura, Hikaru', 'Topalov, Veselin', 'Navara, David', 'Svidler, Peter',
              'Rapport, Richard', 'Wei, Yi', 'Naiditsch, Arkadij', 'Duda, Jan-Krzysztof', 'Shankland, Samuel',
              'Bu, Xiangzhi', 'Harikrishna, Pentala', 'Andreikin, Dmitry', 'Wojtaszek, Radoslaw',
              'Vitiugov, Nikita', 'Jakovenko, Dmitry', 'Fedoseev, Vladimir', 'Wang, Hao', 'Ivanchuk, Vassily',
              'Vidit, Santosh Gujrathi', 'Le, Quang Liem', 'Amin, Bassem', 'Artemiev, Vladislav',
              'Adams, Michael', 'Tomashevsky, Evgeny', 'Kovalev, Vladislav', 'Dubov, Daniil', 'Mamedov, Rauf',
              'Li, Chao b', 'Vallejo Pons, Francisco', 'Matlakov, Maxim', 'Inarkiev, Ernesto',
              'Sadler, Matthew D', 'Cheparinov, Ivan', 'Saric, Ivan', 'Howell, David W L', 'Jones, Gawain C B',
              'Adhiban, B.', 'Sargissian, Gabriel', 'Nabaty, Tamir', 'Korobov, Anton', 'Cori, Jorge',
              'Bacrot, Etienne', 'Wang, Yue', 'Ragger, Markus', 'Kryvoruchko, Yuriy', 'Ni, Hua',
              'Almasi, Zoltan', 'Safarli, Eltaj', 'Eljanov, Pavel', 'Grandelius, Nils', 'Demchenko, Anton',
              'Sasikiran, Krishnan', 'Salem, A.R. Saleh', 'Nisipeanu, Liviu-Dieter', 'Laznicka, Viktor',
              'Gelfand, Boris', 'Rodshtein, Maxim', 'Robson, Ray', 'Bruzon Batista, Lazaro',
              'Maghsoodloo, Parham', 'Xiong, Jeffery', 'Najer, Evgeniy', 'Berkes, Ferenc', 'Kamsky, Gata',
              'Ponomariov, Ruslan', 'Mareco, Sandro', 'Guseinov, Gadir', 'McShane, Luke J', 'Sjugirov, Sanan',
              'Dreev, Aleksey', 'Hou, Yifan', 'Kasimdzhanov, Rustam', 'Areshchenko, Alexander',
              'Malakhov, Vladimir', 'Leko, Peter', 'Melkumyan, Hrant', 'Rausis, Igors', 'Van Kampen, Robin',
              'Shirov, Alexei', 'Parligras, Mircea-Emilian', 'Morozevich, Alexander', 'Swiercz, Dariusz',
              'Fressinet, Laurent', 'Kovalenko, Igor', 'Hammer, Jon Ludvig'].sort();

const memo = {};

export default async function request(apiEndpoint, searchTerm) {
  memo[apiEndpoint] = memo[apiEndpoint] || {};

  memo[apiEndpoint][searchTerm] = memo[apiEndpoint][searchTerm] || ((() => {
    const regex = new RegExp(searchTerm, 'i');

    return { status: 'ok', data: data.filter((string) => regex.test(string)) };
  })());

  return memo[apiEndpoint][searchTerm];
}
