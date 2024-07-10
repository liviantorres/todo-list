
import PropTypes from 'prop-types';

const TodoItem = ({ titulo, descricao }) => {
    return (
       <div className='card'> 
            <h2>{titulo}</h2>
            <p>{descricao}</p>
       </div>
    );
}

TodoItem.propTypes = {
    titulo: PropTypes.node.isRequired,
    descricao: PropTypes.node.isRequired
};

export default TodoItem;
