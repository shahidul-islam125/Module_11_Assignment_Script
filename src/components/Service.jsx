
/*I have implimented here,  how JSX Conditional Rendering Using Ternary Operator works & Short Hand If Else in any JSX at a time. Because of Short hand if else means that ternary operator.
*/

const Service = () => {
    let isLogin = true;
    let user = <h2>Available Our Services</h2>
    let notWorking = <h2>It's not for you!</h2>
    return (
        <div>
            {isLogin ? user : notWorking }
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quaerat nihil porro iste unde, labore esse aliquid provident. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam quasi sunt totam quam possimus laborum earum iste. Tempore, nulla expedita?</p>
        </div>
    );
};

export default Service;