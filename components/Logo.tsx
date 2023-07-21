interface LogoProps {
  className?: string;
}
const Logo = ({ className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 240 240"
      className={className}
    >
      <path
        style={{ fill: 'currentColor' }}
        d="M120 0A120 120 0 0 1 0-120a120 120 0 0 1 120-120 120 120 0 0 1 120 120A120 120 0 0 1 120 0zm0-30a90 90 0 0 0 90-90 90 90 0 0 0-90-90 90 90 0 0 0-90 90 90 90 0 0 0 90 90z"
        transform="scale(1 -1)"
      />
      <path
        style={{ fill: 'currentColor' }}
        d="M120 78a60 60 0 0 0-60 60 60 60 0 0 0 60 60 60 60 0 0 0 60-60 60 60 0 0 0-60-60zm-35 27h20v20H85v10H75v-10h10v-20z"
      />
    </svg>
  );
};

export default Logo;
