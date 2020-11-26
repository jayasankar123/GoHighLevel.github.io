import React from "react";
import Plus from "./plus";
import Email from "./email";


export default function BasicEl(props){

    return(
        <>
        <li>
            <ul className="flow_start">
              <li>
                    <a className="workflow_card--new" data-toggle="tooltip" data-placement="bottom" title="Add new way to start this automation.">
                    <div className="bubble" data-toggle="modal" data-target="#new-automation-modal">
                    <p>Add new trigger</p>
                    </div>
                    </a>
              </li>
            </ul>
          </li>
          <li>
            <ul className="flow_inner">
            <li>
                <div className="workflow_card --blue --with-icon --start">
                  <div className="bubble" data-popover="popover" data-content="
                      <div className='workflow_actions'>
                        <ul className='list-inline'>
                          <li><a href='#' className='workflow-action' data-tooltip='tooltip' data-placement='top' title='Share'><i className='icon icon-share-2'></i></a></li>
                          <li><a href='#' className='workflow-action' data-tooltip='tooltip' data-placement='top' title='View'><i className='icon icon-document-text'></i></a></li>
                          <li><a href='#' className='workflow-action' data-tooltip='tooltip' data-placement='top' title='Delete'><i className='icon icon-trash'></i></a></li>
                        </ul>
                      </div>
                      ">
                    <i className="fas fa-play-circle"></i>
                    <p>Start</p>
                  </div>
                </div>
            </li>
              <Plus data={props.data}/>
                
            </ul>
          </li>
        </>
    );
}