import React from 'react';
import { Events, EventContent } from './style';
function Event() {
    return (
        <Events id="sections">
            <EventContent>
                <div>
                    <b>Moorning Session</b>
                    <p>Worship ministration & Word </p>
                    <span>6:00am - 9:00am</span>
                </div>
                <div>
                    <b>Afternoon / Variety Session</b>
                    <p>Worship & word</p>
                    <span>12:00pm - 3:00pm</span>
                </div>
                <div>
                    <b>Evening Session</b>
                    <p>Worship / Praise / Drama / Word </p>
                    <span>6:00pm - 9:00pm</span>
                </div>
            </EventContent>
        </Events>
    );
}

export default Event;
