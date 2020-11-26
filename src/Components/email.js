import React from "react";
import Plus from "./plus";


export default function Email(props){

    return(
        <>
        <li>
                <div className="workflow_card --blue --with-icon">
                  <div className="bubble" data-popover="popover" data-content="
                      <div className='workflow_actions'>
                        <ul className='list-inline'>
                          <li><a href='#' className='workflow-action' data-tooltip='tooltip' data-placement='top' title='Share'><i className='icon icon-share-2'></i></a></li>
                          <li><a href='#' className='workflow-action' data-tooltip='tooltip' data-placement='top' title='View'><i className='icon icon-document-text'></i></a></li>
                          <li><a href='#' className='workflow-action' data-tooltip='tooltip' data-placement='top' title='Delete'><i className='icon icon-trash'></i></a></li>
                        </ul>
                      </div>
                      ">
                    <i className="far fa-envelope"></i>
                    <div><p>Email</p></div>
                    <i className="icon-drag icon-resize-plus-2"></i>
                  </div>
                </div>
              </li>
              <Plus data={props.data} />
        </>
    );
}