export default function Video({ src, ...props }) {
  return (
    <video controls className="w-full" {...props}>
      <source src={src} type="video/mp4" />
    </video>
  );
}