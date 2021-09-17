import React, {Component} from "react";
import Loader from "./Loader/Loader";
import Table from "./Table/Table";
import DetailRowView from "./DetailRowView/DetailRowView";
import _ from 'lodash';


class App extends Component {

  state = {
    isLoading: true,  
    data: [],
    sort: 'asc', // can be "desc"
    sortField: 'id',
    row: null
  }


  async componentDidMount() {
   const response =  await fetch('http://www.filltext.com/?rows=32&id={number|1000}&imageUrl=https://icons.iconarchive.com/icons/toma4025/rumax/256/camera-icon.png&name={lastName}&count={number}&weight={numberRange|50, 900}&address={addressObject}&comments={lorem|5}');
   const data = await response.json()



   
   this.setState({
     isLoading:false,
     data: _.orderBy(data, this.state.sortField, this.setState.sort) //our data always sorting after reloading
   })
  }

  onSort = sortField => {
    const clonedData = this.state.data.concat() // working with clone data
    const sortType = this.state.sort === 'asc' ? 'desc' : 'asc'  //determine the direction

    const orderedData = _.orderBy(clonedData, sortField, sortType) //sorting

    this.setState({   //change field
        data: orderedData,
        sort: sortType,
        sortField: sortField //field which we sorted
    })

  }

  onRowSelect = row => {
   // console.log(row);
    this.setState({row})
  }

  render() {
    return (
      <div className="container">
          {
            this.state.isLoading //show loader if page not downloaded
              ? <Loader />
              : <Table 
                data={this.state.data}
                onSort={this.onSort}
                sort={this.state.sort} //in which direction it is sorted
                sortField={this.state.sortField} //when changing the sort we will change sortType and sortField
                onRowSelect = {this.onRowSelect}
                />
          }

          {
            this.state.row
            ? <DetailRowView person={this.state.row} />
            : null 
          }

      </div>
    );
  }
}


export default App;
