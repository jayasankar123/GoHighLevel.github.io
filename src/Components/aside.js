import React from "react";

export default function Aside(){
    return (
        <>
        <aside className="hl_workflow--sidebar">
        <a href="#" className="hide-sidebar" id="hide-sidebar"><i className="icon icon-arrow-right-1"></i></a>
        <div className="hl_workflow--sidebar-header">
          <h2>Actions</h2>
            <div className="search-form">
            <i className="icon icon-loupe"></i>
            <input type="text" className="form-control form-light" placeholder="Search Actions"></input>
            </div>
        </div>
        <div className="hl_workflow--sidebar-inner">
          <div className="accordion" id="workflow-action-collapse">
            <div className="actions-set">
              <a className="collapsed" data-toggle="collapse" href="#actions-set1" role="button" aria-expanded="false" aria-controls="actions-set1">
                <span>Sending Options</span>
                <i className="caret icon-arrow-down-1"></i>
              </a>
              <div className="collapse" id="actions-set1" data-parent="#workflow-action-collapse">
                <ul className="actions-list">
                <li draggable="true" id="email" onDragStart={(event) =>{event.dataTransfer.setData('text',event.target.id)}}><span>Send email</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li><span>Send a site message</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li draggable="true" id="sms" onDragStart={(event) =>{event.dataTransfer.setData('text',event.target.id)}}><span>Send SMS</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li><span>Notify Someone</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="actions-set">
              <a className="collapsed" data-toggle="collapse" href="#actions-set2" role="button" aria-expanded="false" aria-controls="actions-set2">
                <span>Conditions and workflow</span>
                <i className="caret icon-arrow-down-1"></i>
              </a>
              <div className="collapse" id="actions-set2" data-parent="#workflow-action-collapse">
                <ul className="actions-list">
                  <li><span>Wait</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li draggable="true" id="ifElse"><span>If / Else</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li><span>Split</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li><span>Go to</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li><span>Goal</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li><span>Start an automation</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li><span>End this automation</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li><span>End other automation</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li><span>Webhook</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="actions-set">
              <a className="collapsed" data-toggle="collapse" href="#actions-set3" role="button" aria-expanded="false" aria-controls="actions-set3">
                <span>Contacts</span>
                <i className="caret icon-arrow-down-1"></i>
              </a>
              <div className="collapse" id="actions-set3" data-parent="#workflow-action-collapse">
                <ul className="actions-list">
                  <li><span>Subscribe</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li><span>Unsubscribe</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li><span>Convert</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li><span>Update contact</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li><span>Add tag</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li><span>Remove tag</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li><span>Add note</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li><span>Add to Facebook Custom Audience</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li><span>Remove from Facebook Custom Audience</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li><span>Adjust score</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="actions-set">
              <a className="collapsed" data-toggle="collapse" href="#actions-set4" role="button" aria-expanded="false" aria-controls="actions-set4">
                <span>CRM</span>
                <i className="caret icon-arrow-down-1"></i>
              </a>
              <div className="collapse" id="actions-set4" data-parent="#workflow-action-collapse">
                <ul className="actions-list">
                  <li><span>Add deal</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li><span>Update title</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li><span>Update status</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li><span>Update owner</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li><span>Update value</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li><span>Update stage</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li><span>Update custom field</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li><span>Add task</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li><span>Add note</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li><span>Complete task</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li><span>Adjust score</span>  <i className="icon icon-resize-plus-2"></i>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </aside>
        </>
    );
}