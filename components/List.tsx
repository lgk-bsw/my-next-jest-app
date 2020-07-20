import { useState, ChangeEvent, FormEvent } from "react";

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
                <button type="submit">+</button>
                <input
                    type="text"
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