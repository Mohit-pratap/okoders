import React, {Component} from 'react'
import './App.css'
import Api from './Api/api'
import Table from './components/Table/Table'

class App extends Component{
  
  state = {
    post : [],
    pageCount: 0,
    loading: true
  }

  componentDidMount(){
    setInterval(() => {
      Api.get(`search_by_date?tags=story&page=${this.state.pageCount}`)
      .then(res => {
        const post = this.state.post.concat(res.data.hits)
        this.setState({ 
          post: post,
          pageCount: this.state.pageCount + 1,
          loading: false
        })
      })
    }, 1000)
  }

  render(){
    const { post, loading } = this.state
    return(
      <div>
        { loading === true ? 
          <div className="loading">
            <span>Loading...</span>
          </div>
          : <Table data={post} />
        }
        
      </div>
    )
  }
}

export default App;
