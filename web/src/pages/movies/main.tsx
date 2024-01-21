import React from 'react';

import { Input, Table } from 'antd';
import { IEntity } from '../../modules/movies/types';

import { useState } from 'react';
import { Api, Mappers } from 'modules/movies';

const Main: React.FC = () => {
  const [count, setCount] = useState(0);
  const [dataMovie, setdataMovie] = useState<IEntity.Movie[]>([]);
  const dataSource = [
    {
      key: '1',
      name: 'All genres'
    },
    {
      key: '2',
      name: 'Action'
    },
    {
      key: '3',
      name: 'Comedy'
    },
    {
      key: '4',
      name: 'Romance'
    },
    {
      key: '5',
      name: 'Thriller'
    }
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    }
  ];
  async function fetchMovies() {
    const mal = await Api.Movie.List();
    const res: IEntity.Movie[] = mal.data;
    res[0].like = '🎈';
    setCount(res.length);
    setdataMovie(res);
    console.log('Movies =', res);
  }
  // fetchMovies();

  const columnsMovie = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      sorter: (record1: any, record2: any) => {
        return record1.numberInStock - record2.numberInStock;
      }
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
      sorter: (record1: any, record2: any) => {
        return record1.numberInStock - record2.numberInStock;
      }
    },
    {
      title: 'Stock',
      dataIndex: 'numberInStock',
      key: 'numberInStock',
      sorter: (record1: any, record2: any) => {
        return record1.numberInStock - record2.numberInStock;
      }
    },
    {
      title: 'Rate',
      dataIndex: 'dailyRentalRate',
      key: 'rate',
      sorter: (record1: any, record2: any) => {
        return record1.numberInStock - record2.numberInStock;
      }
    },
    {
      title: 'Like',
      dataIndex: 'like',
      key: 'like'
    }
  ];
  
  return (
    <div className="flex gap-10 px-48 py-10">
      <div className="w-[150px]">
        <Table className=" " dataSource={dataSource} columns={columns} pagination={false} />
      </div>

      <div className=" flex w-[650px] flex-col gap-5">
        <div className="">Showing {count} movies in the database.</div>
        <Input className="w-[500px]" type="search " placeholder="Search" size="large" />
        <Table className=" " dataSource={dataMovie} columns={columnsMovie} />
      </div>
    </div>
  );
};

export default Main;
