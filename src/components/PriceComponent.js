import React, { Component } from 'react'

class PriceComponent extends Component {
    render() {
        const {data}=this.props
        const save=(data.save!==0)?<p>Save <span className="save">{data.save}%</span></p>:""
        return (
            <div className="price">
                <div className="head">{data.plan.toUpperCase()}</div>
                <div className="body">
                    <p>Buy <span className="sessions">{data.sessions}</span> sessions</p>
                    <p>Rs <span className="perSession">{data.perSession}</span> / sessions</p>
                    {save}
                </div>
            </div>
        )
    }
}

export default PriceComponent
