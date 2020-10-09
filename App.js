import React from 'react';
import Button from './Button';

function App () {
        return (
            <div>
                <Button>Default</Button>
                <Button variant="outline"> Button</Button>
                <Button variant="text">Button</Button>
                <Button disabledShadow="disabled-shadow">Default</Button>
                <Button disabled="disabled">Disabled</Button>
                <Button startIcon="local_gocery_store start-icon">Button</Button>
                <Button endIcon="local_gocery_store end-icon">Button</Button>
                <Button size="sm" color="color">Samll</Button>
                <Button size="md" color="color">Medium</Button>
                <Button size="lg" color="color">Large</Button>
                <Button variant="text" disabled="disabled">Text disabled</Button>
                 <Button>
                </Button>
                 <Button>
                </Button>
                <Button>
                </Button>
                <Button>
                </Button>
            </div>
        )
    }

export default App;