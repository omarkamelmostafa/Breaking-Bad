import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CharacterItem } from "./CharacterItem";
import { Spinner } from "./../ui/Spinner";

export const CharacterGrid = ({ isLoading, items }) => {
	return isLoading ? <Spinner /> : (
		<section className='cards'>
			{items.map(item => (
				<CharacterItem key={uuidv4()} item={item} />
			))}
		</section>
	)
}
{/* item.char_id */ }