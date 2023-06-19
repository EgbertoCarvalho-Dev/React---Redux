/*
<If test={exp}>
    <span>....</span>
    <span>....</span>
    <span>....</span>
</If>

*/

export default props => {
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0];

    const ifChildren = props.children.filter(child => {
        return child !== elseChild
    });

    if (props.test) {
        return ifChildren;
    } else {
        return false;
    }
}


export const Else = props => props.children