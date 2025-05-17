// components/UI/InputField.jsx
const InputField = ({ label, type = "text", name, placeholder, value, onChange, required = false, icon = null }) => {
    return (
      <div className="mb-4">
        {label && <label className="block text-sm font-medium mb-1">{label}</label>}
        <div className="relative">
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            className="form-input"
          />
          {icon && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              {icon}
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default InputField;