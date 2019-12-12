import React, { Fragment } from 'react';
import RadioChart from './charts/radio-chart';
import './index.less';
class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 2,
      content: [
        {
          name: '人群营销',
          data: [999, 666]
        },
        {
          name: '货品营销',
          data: [999, 233]
        },
        {
          name: '定向营销',
          data: [999, 1]
        },
      ]
    }
  }
  render() {
    return (
      <div className="container">
        <div className="chart">
          <RadioChart />
        </div>
        {/* <div className="tab-head">
          {
            this.state.content.map((item, idx) => {
              return (
                <div
                  className={idx === this.state.current ? "head active" : "head"}
                  key={idx}
                  onClick={() => { this.itemClick(idx) }}>
                  <div>{item.name}</div>
                </div>
              )
            })
          }
        </div>
        <div className="tabcontent">
          {
            this.state.content.map((item, idx) => {
              return (
                <ul
                  className={idx === this.state.current ? "active-content" : ''}
                  key={idx}
                >
                  {
                    item.data.map(dd => {
                      return <li>{dd}</li>
                    })
                  }
                </ul>
              )
            })
          }
        </div> */}
      </div>
    )
  }
  itemClick = (idx) => {
    this.setState({
      current: idx
    })
  }
}

export default View