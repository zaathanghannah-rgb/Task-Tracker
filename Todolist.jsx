const Todolist=(props) => {
    const {todos} =props;
     
    console.log(todos);
    return  (
        <div className="task-list">
            <div classsName="empty-state">
                <p>All caught up!Try to learm something new.</p>

            </div>
        </div>
    );
};

export default Todolist;