import { useState, ChangeEvent, FormEvent } from "react";
import { Btn } from "./Btn";
import FormControlStyles from "../styles/FormControl.module.scss";

export const List = () => {
    const [items, setItems] = useState<string[]>([]);
    const [newItem, setNewItem] = useState<string>("");

    return (
        <div>
            <ul>
                {items.map((item: string, key: number) =>
                    <li key={key}>
                        <input
                            value={item}
                            className={FormControlStyles.formControl}
                            onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
                                let newItems = [...items];
                                newItems[key] = target.value;
                                setItems(newItems);
                            }}
                        />
                    </li>
                )}
            </ul>

            <form
                onSubmit={(event: FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    let newItems = [...items];
                    newItems.push(newItem);
                    setItems(newItems);
                    setNewItem("");
                }}
            >
                <Btn type="submit" label="+" />
                <input
                    type="text"
                    className={FormControlStyles.formControl}
                    placeholder="Enter something..."
                    value={newItem}
                    onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
                        setNewItem(target.value);
                    }}
                />
            </form>
        </div>
    );
};