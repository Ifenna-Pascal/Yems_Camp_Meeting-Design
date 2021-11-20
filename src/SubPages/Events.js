import React from 'react';
import { Events, EventContent } from './style';
function Event() {
    return (
        <Events id="sections">
            <EventContent>
                <div>
                    <b>Moorning Section</b>
                    <p>Worship Sections</p>
                    <span>6:00am - 9:00am</span>
                </div>
                <div>
                    <b>Afternoon Section</b>
                    <p>Worship Sections</p>
                    <span>6:00am - 9:00am</span>
                </div>
                <div>
                    <b>Evening Section</b>
                    <p>Worship Sections</p>
                    <span>6:00am - 9:00am</span>
                </div>
            </EventContent>
        </Events>
    );
}

export default Event;
