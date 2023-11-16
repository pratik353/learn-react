import React, {useState} from "react";
import { useAsyncDebounce } from "react-table";

// export const GlobalFilter = (filter, setFilter) => {

//   return (
//     <span>
//       Search :{" "}
//       <input
//         value={filter.filter || ''}
//         onChange={(e) => filter.setFilter(e.target.value)}
//       />
//     </span>
//   );
// };


//useing useAsyncDebounce Hook
export const GlobalFilter = (filter, setFilter) => {
  const [value, setValue] = useState(filter.filter)
const onChange = useAsyncDebounce(value => {
  filter.setFilter(value || undefined)
}, 700)

    return (
      <span>
        Search :{" "}
        <input
          value={value|| ''}
          onChange={(e) => {setValue(e.target.value)
          onChange(e.target.value)
        }
      }
        />
      </span>
    );
  };
