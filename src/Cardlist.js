import React from 'react';
import robot from './robot';
import Card from './Card';
const Cardlist = () => {
    return (
<div>
<Card id={robot[0].id} name={robot[0].Name} Occupation={robot[0].Occupation}  />
<Card id={robot[1].id} name={robot[1].Name} Occupation={robot[1].Occupation} />
<Card id={robot[2].id} name={robot[2].Name} Occupation={robot[2].Occupation} />
<Card id={robot[3].id} name={robot[3].Name} Occupation={robot[3].Occupation} />
</div>
    );
}

export default Cardlist;