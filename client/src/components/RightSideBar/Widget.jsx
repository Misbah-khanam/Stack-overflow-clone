import React from 'react'
import pen from '../../assets/pen-solid.svg'
import comment from '../../assets/message-solid.svg'
import blackLogo from "../../assets/stack-overflow.svg"

const Widget = () => {
    return (
        <div className='widget'>
            <h4>The Overflow Blog</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <img src={pen} alt="pen" width="18" />
                    <p>Observability is key to the future of software (and your devOPs career)</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={pen} alt="pen" width="18" />
                    <p>Observability is key to the future of software (and your devOPs career)</p>
                </div>
            </div>
            <h4>Featured on Meta</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <img src={comment} alt="pen" width="18" />
                    <p>Observability is key to the future of software (and your devOPs career)</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={comment} alt="pen" width="18" />
                    <p>Observability is key to the future of software (and your devOPs career)</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={blackLogo} alt="pen" width="18" />
                    <p>Observability is key to the future of software (and your devOPs career)</p>
                </div>
            </div>
            <h4>Hot Meta Posts</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <p>38</p>
                    <p>Observability is key to the future of software (and your devOPs career)</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <p>20</p>
                    <p>Observability is key to the future of software (and your devOPs career)</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <p>14</p>
                    <p>Observability is key to the future of software (and your devOPs career)</p>
                </div>
            </div>
        </div>
    )
}

export default Widget