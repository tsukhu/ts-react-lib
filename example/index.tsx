import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '@bit/tsukhu.ts-react-styles.root-styles';
import ProductList, { ProductProps } from '@bit/tsukhu.ts-collaborate.product-list';
const products: ProductProps[] = [
  {
    title: 'Apple iPhone XR (Red, 128 GB)',
    description:
      '128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor',
    img: 'https://i.imgur.com/KFojDGa.jpg',
    price: '$1000',
  },
  {
    title: 'Apple iPhone XS (Silver, 64 GB)',
    description:
      '64 GB ROM | 14.73 cm (5.8 inch) Super Retina HD Display 12MP + 12MP | 7MP Front Camera A12 Bionic Chip Processor',
    img: 'https://i.imgur.com/KFojDGa.jpg',
    price: '$1500',
  },
  {
    title: 'Apple iPhone XS Max (Gold, 64 GB)',
    description:
      '64 GB ROM | 16.51 cm (6.5 inch) Super Retina HD Display 12MP + 12MP | 7MP Front Camera A12 Bionic Chip Processor',
    img: 'https://i.imgur.com/KFojDGa.jpg',
    price: '$2000',
  },
  {
    title: 'OnePlus 7 Pro (Almond, 256 GB)',
    description:
      'Rear Camera|48MP (Primary)+ 8MP (Tele-photo)+16MP (ultrawide)| Front Camera|16 MP POP-UP Camera|8GB RAM|Android pie',
    img: 'https://i.imgur.com/6IUbEME.jpg',
    price: '$777',
  },
];

const App = () => {
  return (
    <div>
      <ProductList products={products}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
