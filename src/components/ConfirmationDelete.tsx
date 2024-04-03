import { deleteTodo } from "@/server/TodoActions";

interface ConfirmationDeleteProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  id: string;
}

export const ConfirmationDelete = ({isOpen, setIsOpen, id}: ConfirmationDeleteProps) => {
  return <>
    {isOpen && (
      <div className="confirmation-delete">
        <div className="confirmation-delete-content">
          <span>Are you sure you want to delete this todo?</span>
          <div className="content-btn">
            <button
            className="cancel-btn"
            onClick={() => setIsOpen(false)}>Cancel</button>
            <button 
            className="delete-btn"
            onClick={() => {
              deleteTodo(id);
              setIsOpen(false);
            }}>Delete</button>
          </div>
        </div>
      </div>
    )}
  </>;
}