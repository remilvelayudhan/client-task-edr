import React from 'react'
import { Header } from '../header/Header'
import { GroupPannel } from '../groupPanel/GroupPannel'

export const Dashboard = () => {
    return (
        <>
            <Header />
            <div className="container-fluid row  h-100">
                <div className="col-11 ">
                    <div className="row">
                        <div className="col col-3 ">
                            <GroupPannel />  </div>
                        <div className="col col-5 bg-primary">
                            2
                        </div>
                        <div className="col col-4 bg-light">
                            3
                        </div>
                    </div>
                </div>
                <div className="col-1">
                    <div className=" bg-light ">Row column</div>
                </div>
            </div>
        </>
    )
}
