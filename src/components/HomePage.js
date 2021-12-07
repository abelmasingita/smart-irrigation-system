import React from 'react'
import { Container} from 'react-bootstrap';
import './HomePage.css'
import { useAuth0 } from '@auth0/auth0-react'
import CorouselComponent from './CorouselComponent';

const HomePage = () => {

    const {user,isAuthenticated} = useAuth0();

    return (
        isAuthenticated ?
        (
            <main>
                <Container className='dir'>
                    <div className='direction'>
                        <iframe width="500" height="300" 
                                frameborder="0" 
                                src="https://stem.ubidots.com/app/dashboards/public/widget/7czorBw-BCnzzSAZxZTbGJxq79rgzLWEc1oEw0m5i_4?embed=true">              
                        </iframe>
                        <iframe width="500" height="300" 
                                frameborder="0"
                                src="https://stem.ubidots.com/app/dashboards/public/widget/ABrObhoXBjox48OvGmJ7wAl2021eVx_vgvmFUXVfdlM?embed=true">         
                        </iframe>
                    </div>
                </Container>
          </main>
        ) : (
            <main>
                <Container className='dir'>
                    <CorouselComponent />
                </Container>
            </main>
        )
    )
}

export default HomePage
