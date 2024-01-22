import { Button, Input, Select, Typography, message } from 'antd';
import { AxiosError } from 'axios';
import { Api as ApiMovie, Mappers as MappersMovie } from 'modules/movies';
import { IEntity } from 'modules/movies/types';
import React, { Component } from 'react';

interface NewProps {
  genres: IEntity.Genre[];
}

export default class New extends Component<{}, NewProps> {
  state = {
    genres: []
  };
  handleSubmit: React.FormEventHandler = async e => {
    e.preventDefault();

    const title = document.querySelector<HTMLInputElement>('#title')?.value!;
    const stock = document.querySelector<HTMLInputElement>('#stock')?.value!;
    const genre = document.querySelector<HTMLInputElement>('#genre')?.value!;
    const rate = document.querySelector<HTMLInputElement>('#rate')?.value!;

    

    try {
      // const addRes = await ApiMovie.Movie.Add({ title, genreId, stock: Number(stock), rate: Number(rate), token });
    } catch (err) {
      console.log(err);
    }
  };
  async componentDidMount() {
    try {
      const genreResponse = await ApiMovie.Genre.List();

      const genres = (genreResponse.data || []).map(MappersMovie.Genre);

      this.setState({ genres });
      console.log(this.state.genres);
    } catch (err: any) {
      if (err instanceof AxiosError) {
        message.error(err.response?.data);
      }
    }
  }

  render() {
    return (
      <div className=" container mx-auto flex h-full flex-col items-center  gap-2">
        <form onSubmit={this.handleSubmit} className="flex w-[800px] flex-col gap-2">
          <Typography className="text-center text-3xl">Add Movie</Typography>
          <Input id="title" type="text" placeholder="title" size="large" />
          <Input id="stock" placeholder="stock" size="large" />
          <Select id="genre" allowClear placeholder="genre">
            {this.state.genres.map((item: IEntity.Genre, idx) => {
              console.log(item.name);

              return (
                <Select.Option value={item.name} key={item.name}>
                  {item.name}
                </Select.Option>
              );
            })}
          </Select>
          <Input id="rate" placeholder="rate" size="large" />
          <Button type="primary" htmlType="submit" size="large">
            Add Movies
          </Button>
        </form>
      </div>
    );
  }
}
