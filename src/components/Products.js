import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { ContImage }from '../style/styles'

export default function Products() {
  return (
    <ContImage>
    <ImageList sx={{ width: 1700, height: 550 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div" >NOSSOS CHOCOLATES</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img} >
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                Confira mais produtos em nosso APP
                <InfoIcon />
              </IconButton >
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    </ContImage>
  );
}

const itemData = [
  {
    img: 'https://images.pexels.com/photos/9159719/pexels-photo-9159719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Trufas de Chocolate ao Leite - 12 Unid.',
    author: 'R$ 29,90',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.pexels.com/photos/13278153/pexels-photo-13278153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Mini Docinhos Finos - 30 Unid',
    author: 'R$ 37,90',
  },
  {
    img: 'https://images.pexels.com/photos/14122741/pexels-photo-14122741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Caixa de Brigadeiros Kids - 6 Unid.',
    author: 'R$ 12,90',
  },
  {
    img: 'https://images.pexels.com/photos/1854664/pexels-photo-1854664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Barra de Chocolate Branco com amêndoas - 150gr',
    author: 'R$ 10,90',
    cols: 2,
  },
  {
    img: 'https://images.pexels.com/photos/14456065/pexels-photo-14456065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Barra de Chocolate ao Leite - 150gr',
    author: 'R$ 9,90',
    cols: 2,
  },
  {
    img: 'https://images.pexels.com/photos/913136/pexels-photo-913136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'CupCake - Unid',
    author: 'R$ 4,70',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Fatia de Bolo Cacau 50%',
    author: 'R$ 4,20 - 100gr',
  },
  {
    img: 'https://images.pexels.com/photos/2014693/pexels-photo-2014693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Macarrons de Chocolate',
    author: 'R$ 8,90 - 100gr',
  },
  {
    img: 'https://images.pexels.com/photos/4198376/pexels-photo-4198376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Clássicos - Barra Chocolate ao Leite com Pimenta',
    author: 'R$ 12,90 - 180gr',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.pexels.com/photos/6533167/pexels-photo-6533167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Para Presentear - Bombons de chocolate ao Leite',
    author: 'R$ 19,90',
  },
  {
    img: 'https://images.pexels.com/photos/6095744/pexels-photo-6095744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Brownie Chocolate Supreme',
    author: 'R$ 6,90',
  },
  {
    img: 'https://images.pexels.com/photos/4686958/pexels-photo-4686958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Donuts Sabores Clássicos',
    author: 'R$ 22,90 - 6 Unid',
    cols: 2,
  },
];