import React from 'react';
import pastors from './pastors';
import { Pastors, PastorsLayout, Image, Text, Pastor } from './style';
function Grid() {
    return (
        <PastorsLayout>
            <Pastors>
                {' '}
                <div className="first">
                    <Pastor>
                        <Image src="https://images.pexels.com/photos/7755664/pexels-photo-7755664.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
                    </Pastor>
                    <Text>Pastor George </Text>
                </div>
                <div className="second">
                    <Pastor>
                        <Image src="https://images.unsplash.com/photo-1528769695820-64247c2663cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmluZSUyMGxhZGllc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    </Pastor>
                    <Text>Pastor George </Text>
                </div>
                <div className="third">
                    <Pastor>
                        <Image src="https://cdn.pixabay.com/photo/2019/12/16/14/46/black-man-4699506_960_720.jpg" />
                    </Pastor>
                    <Text>Pastor George </Text>
                </div>
                <div className="fourth">
                    <Pastor>
                        <Image src="https://images.pexels.com/photos/7755664/pexels-photo-7755664.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
                    </Pastor>
                    <Text>Pastor George </Text>
                </div>
                <div className="fifth">
                    <Pastor>
                        <Image src="https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmluZSUyMG1lbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    </Pastor>
                    <Text>Pastor George </Text>
                </div>
                <div className="six">
                    <Pastor>
                        <Image src="https://images.pexels.com/photos/7755664/pexels-photo-7755664.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
                    </Pastor>
                    <Text>Pastor George </Text>
                </div>
                <div className="seven">
                    <Pastor>
                        <Image src="https://images.pexels.com/photos/7755664/pexels-photo-7755664.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
                    </Pastor>
                    <Text>Pastor George </Text>
                </div>
                {/* <div className="eight">
                    <Pastor>
                        <Image src="https://images.pexels.com/photos/7755664/pexels-photo-7755664.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
                    </Pastor>
                    <Text>Pastor George </Text>
                </div> */}
            </Pastors>
        </PastorsLayout>
    );
}

export default Grid;
