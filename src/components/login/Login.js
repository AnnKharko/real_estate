import React from 'react';

export const Login = () => {
    const loginForm = React.createRef();
    const send = (e) => {
        e.preventDefault();
    };
    // const commitState = (e) => {
    //     console.log(e.);
    // };

    return (
       <div>
           <form action={'/login'} onSubmit={send} ref={loginForm}> REGISTRATION
               <input name={'Name'}/>
               <input name={'phone'}/>
           </form>
       </div>
    )

};
