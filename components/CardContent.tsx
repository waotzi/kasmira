
interface CardContentProps {
	title: string;
	image?: string;
	key?: string;
	closeButton?: boolean;
}
  
function copyToClipboard(event: any) {
    event.stopPropagation(); // Prevent triggering other click events
    const keyElement = event.currentTarget.querySelector('.copy-key');
    const key = keyElement.innerHTML

    // Highlight the key text within the copy-key span
    const range = document.createRange();
    range.selectNodeContents(keyElement);
    const selection = window.getSelection();
    if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
    }

    navigator.clipboard.writeText(key).then(
        function () {
        console.log("Copied key to clipboard:", key);
        // You can add any additional feedback or UI changes here, such as showing a tooltip
        },
        function (err) {
        console.error("Failed to copy key to clipboard:", err);
        }
    );
}
export default function CardContent({ title, key, image, closeButton }: CardContentProps) {
    return (
        
        <div onClick={copyToClipboard}>
            <h2>
                {title}
                <span>&rarr;</span>
            </h2>
            {closeButton && (
            <a href="" class="modal-close">&times;</a>
            )}
            <div class="text-center">
                <img src={image} />
            </div>
            <span class="copy-key">{key}</span>
        </div>



    );
}

  
  
  