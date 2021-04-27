import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText, MediaUpload } from '@wordpress/block-editor';
import { ColorPicker, Button } from '@wordpress/components';
import quotes from './assets/quotes.svg';
registerBlockType( 'basic/quote-block', {
	apiVersion: 2,
	title: 'Basic Quote Block',
	icon: 'lightbulb',
	category: 'design',
	attributes: {
		quote: {
			type: 'string',
		},
		author: {
			type: 'string',
		},
		citation: {
			type: 'string',
		},
		color: {
			type: 'string',
		},
		imgUrl: {
			type: 'string',
		},
	},
	edit: ( { attributes, setAttributes } ) => {
		const blockProps = useBlockProps();
		return (
			<div { ...blockProps }>
				<h2> BASIC QUOTE BLOCK </h2>

				<h6>Enter the quote</h6>
				<RichText
					value={ attributes.quote }
					onChange={ ( quote ) => setAttributes( { quote } ) }
					placeholder={ 'Quote...' }
				/>

				<h6>Enter the citation </h6>
				<RichText
					value={ attributes.citation }
					onChange={ ( citation ) => setAttributes( { citation } ) }
					placeholder={ 'Citation...' }
				/>

				<h6>Enter the author </h6>
				<RichText
					value={ attributes.author }
					onChange={ ( author ) => setAttributes( { author } ) }
					placeholder={ 'Author...' }
				/>

				<h6>Pick the color theme</h6>
				<ColorPicker
					color={ attributes.color }
					onChangeComplete={ ( value ) =>
						setAttributes( { color: value.hex } )
					}
					disableAlpha
				/>
				<div className="media__manager">
					{ attributes.imgUrl && (
						<div>
							<img
								src={ attributes.imgUrl }
								style={ { width: '50px', height: '50px' } }
								alt="Uploaded Author Pic"
							/>
							<Button
								className="button"
								onClick={ () =>
									setAttributes( { imgUrl: null } )
								}
							>
								Remove Image
							</Button>
						</div>
					) }

					<MediaUpload
						onSelect={ ( img ) =>
							setAttributes( { imgUrl: img.url } )
						}
						allowedTypes={ [ 'image' ] }
						value={ attributes.imageID }
						render={ ( { open } ) => (
							<Button className="button" onClick={ () => open() }>
								Upload author image
							</Button>
						) }
					/>
				</div>
			</div>
		);
	},
	save: ( { attributes } ) => {
		const blockProps = useBlockProps.save();
		return (
			<div { ...blockProps }>
				<div
					className="quote__header"
					style={ {
						'border-top': `2px solid ${ attributes.color }`,
					} }
				>
					<img
						src={ quotes }
						className="quotes__image"
						alt="Author"
					/>
					<p className="quote__quote">{ attributes.quote }</p>
				</div>
				<div className="quote__footer">
					<div className="quote__footer__text">
						<h3 style={ { color: attributes.color } }>
							{ attributes.citation }
						</h3>
						<h4>{ attributes.author }</h4>
					</div>
					<div className="image__outer">
						<div className="image">
							<img
								src={
									attributes.imgUrl ||
									'https://via.placeholder.com/50x50'
								}
								alt="Author"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	},
} );
