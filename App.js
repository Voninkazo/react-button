import React from 'react';
import Button from './Button';

function App () {
        return (
            <div>
                <Button default>Default</Button>
                <Button variant="outline"> Button</Button>
                <Button variant="text">Button</Button>
                <Button disabledShadow>Default</Button>
                <Button disabled>Disabled</Button>
                <Button startIcon="local_gocery_store">Button</Button>
                <Button endIcon="local_gocery_store">Button</Button>
                <Button size="sm" color="color">Samll</Button>
                <Button size="md" color="color">Medium</Button>
                <Button size="lg" color="color">Large</Button>
                <Button variant="text" disabled>Text disabled</Button>
                 <Button color="default">Default</Button>
                 <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="danger">Danger</Button>
            </div>
        )
    }

export default App;