export const DashboardIcon = () => (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 6C2.5 4.11438 2.5 3.17157 3.08579 2.58579C3.67157 2 4.61438 2 6.5 2C8.38562 2 9.32843 2 9.91421 2.58579C10.5 3.17157 10.5 4.11438 10.5 6V8C10.5 9.88562 10.5 10.8284 9.91421 11.4142C9.32843 12 8.38562 12 6.5 12C4.61438 12 3.67157 12 3.08579 11.4142C2.5 10.8284 2.5 9.88562 2.5 8V6Z"
        stroke="#4E410C"
        strokeWidth="1.5"
      />
      <path
        d="M2.5 19C2.5 18.0681 2.5 17.6022 2.65224 17.2346C2.85523 16.7446 3.24458 16.3552 3.73463 16.1522C4.10218 16 4.56812 16 5.5 16H7.5C8.43188 16 8.89782 16 9.26537 16.1522C9.75542 16.3552 10.1448 16.7446 10.3478 17.2346C10.5 17.6022 10.5 18.0681 10.5 19C10.5 19.9319 10.5 20.3978 10.3478 20.7654C10.1448 21.2554 9.75542 21.6448 9.26537 21.8478C8.89782 22 8.43188 22 7.5 22H5.5C4.56812 22 4.10218 22 3.73463 21.8478C3.24458 21.6448 2.85523 21.2554 2.65224 20.7654C2.5 20.3978 2.5 19.9319 2.5 19Z"
        stroke="#4E410C"
        strokeWidth="1.5"
      />
      <path
        d="M14.5 16C14.5 14.1144 14.5 13.1716 15.0858 12.5858C15.6716 12 16.6144 12 18.5 12C20.3856 12 21.3284 12 21.9142 12.5858C22.5 13.1716 22.5 14.1144 22.5 16V18C22.5 19.8856 22.5 20.8284 21.9142 21.4142C21.3284 22 20.3856 22 18.5 22C16.6144 22 15.6716 22 15.0858 21.4142C14.5 20.8284 14.5 19.8856 14.5 18V16Z"
        stroke="#4E410C"
        strokeWidth="1.5"
      />
      <path
        d="M14.5 5C14.5 4.06812 14.5 3.60218 14.6522 3.23463C14.8552 2.74458 15.2446 2.35523 15.7346 2.15224C16.1022 2 16.5681 2 17.5 2H19.5C20.4319 2 20.8978 2 21.2654 2.15224C21.7554 2.35523 22.1448 2.74458 22.3478 3.23463C22.5 3.60218 22.5 4.06812 22.5 5C22.5 5.93188 22.5 6.39782 22.3478 6.76537C22.1448 7.25542 21.7554 7.64477 21.2654 7.84776C20.8978 8 20.4319 8 19.5 8H17.5C16.5681 8 16.1022 8 15.7346 7.84776C15.2446 7.64477 14.8552 7.25542 14.6522 6.76537C14.5 6.39782 14.5 5.93188 14.5 5Z"
        stroke="#4E410C"
        strokeWidth="1.5"
      />
    </svg>
  );
  
  export const OrderIcon = ({
    color,
    size,
  }: {
    color?: string;
    size?: string;
  }) => (
    <svg
      width={size ? size : "24"}
      height={size ? size : "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 8H20.196C20.8208 8 21.1332 8 21.3619 8.10084C22.3736 8.5469 21.9213 9.67075 21.7511 10.4784C21.7205 10.6235 21.621 10.747 21.4816 10.8132C20.9033 11.0876 20.4982 11.6081 20.3919 12.2134L19.7993 15.5878C19.5386 17.0725 19.4495 19.1943 18.1484 20.2402C17.1938 21 15.8184 21 13.0675 21H10.9325C8.18162 21 6.8062 21 5.8516 20.2402C4.55052 19.1942 4.46138 17.0725 4.20066 15.5878L3.60807 12.2134C3.50177 11.6081 3.09673 11.0876 2.51841 10.8132C2.37896 10.747 2.27952 10.6235 2.24894 10.4784C2.07874 9.67075 1.6264 8.5469 2.63812 8.10084C2.86684 8 3.17922 8 3.80397 8H7.5"
        stroke={color ? color : "#4E4949"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 12H10"
        stroke={color ? color : "#4E4949"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 11L10 3M15 3L17.5 8"
        stroke={color ? color : "#4E4949"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
  
  export const ProductsIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 2H4.30116C5.48672 2 6.0795 2 6.4814 2.37142C6.88331 2.74285 6.96165 3.36307 7.11834 4.60351L8.24573 13.5287C8.45464 15.1826 8.5591 16.0095 9.09497 16.5048C9.63085 17 10.4212 17 12.002 17H22"
        stroke="#4E4949"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M11.5 21C12.3284 21 13 20.3284 13 19.5C13 18.6716 12.3284 18 11.5 18C10.6716 18 10 18.6716 10 19.5C10 20.3284 10.6716 21 11.5 21Z"
        stroke="#4E4949"
        strokeWidth="1.5"
      />
      <path
        d="M18.5 21C19.3284 21 20 20.3284 20 19.5C20 18.6716 19.3284 18 18.5 18C17.6716 18 17 18.6716 17 19.5C17 20.3284 17.6716 21 18.5 21Z"
        stroke="#4E4949"
        strokeWidth="1.5"
      />
      <path
        d="M18 14H16C14.1144 14 13.1716 14 12.5858 13.4142C12 12.8284 12 11.8856 12 10V8C12 6.11438 12 5.17157 12.5858 4.58579C13.1716 4 14.1144 4 16 4H18C19.8856 4 20.8284 4 21.4142 4.58579C22 5.17157 22 6.11438 22 8V10C22 11.8856 22 12.8284 21.4142 13.4142C20.8284 14 19.8856 14 18 14Z"
        stroke="#4E4949"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 7H17.5"
        stroke="#4E4949"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  export const PlusIcon = () => (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 1V12M12 6.5H1"
        stroke="#704E00"
        strokeWidth="1.03125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  export const BrokenImage = () => (
    <svg
      width="110"
      height="110"
      viewBox="0 0 110 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.8004 69.7441L42.3667 57.9217C42.9819 56.9605 44.3168 56.7897 45.1541 57.565L50.0909 62.1361C50.8431 62.8326 52.0206 62.7762 52.7028 62.0109L61.2832 52.3854C62.0906 51.4797 63.5394 51.595 64.1935 52.6169L75.1549 69.7441C75.9352 70.9634 75.0596 72.5633 73.612 72.5633H36.3433C34.8957 72.5633 34.0201 70.9634 34.8004 69.7441Z"
        stroke="black"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="48.3998"
        cy="43.9997"
        r="5.775"
        stroke="black"
        strokeWidth="1.65"
      />
    </svg>
  );
  
  export const AdminDetailsIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.18007 15.2964C3.92249 16.0335 0.625212 17.5386 2.63348 19.422C3.6145 20.342 4.7071 21 6.08077 21H13.9192C15.2929 21 16.3855 20.342 17.3665 19.422C19.3748 17.5386 16.0775 16.0335 14.8199 15.2964C11.8709 13.5679 8.12906 13.5679 5.18007 15.2964Z"
        stroke="#0B0A0A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7Z"
        stroke="#0B0A0A"
        strokeWidth="1.5"
      />
      <path
        d="M19.6221 4.56564C19.8457 4.32342 19.9574 4.20232 20.0762 4.13168C20.3628 3.96123 20.7157 3.95593 21.0071 4.1177C21.1279 4.18474 21.2431 4.30244 21.4735 4.53783C21.7039 4.77322 21.8192 4.89092 21.8848 5.01428C22.0431 5.31194 22.038 5.67244 21.8711 5.96521C21.8019 6.08655 21.6834 6.20073 21.4463 6.4291L18.6252 9.14629C18.1759 9.57906 17.9512 9.79545 17.6704 9.90512C17.3896 10.0148 17.081 10.0067 16.4636 9.99057L16.3796 9.98838C16.1917 9.98346 16.0977 9.98101 16.0431 9.91901C15.9885 9.85702 15.9959 9.7613 16.0108 9.56985L16.0189 9.4659C16.0609 8.92706 16.0819 8.65765 16.1871 8.41547C16.2923 8.17328 16.4738 7.97664 16.8368 7.58335L19.6221 4.56564Z"
        stroke="#0B0A0A"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  export const HomeIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 17H12.009"
        stroke="#4E410C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 8.5V13.5C20 17.2712 20 19.1569 18.8284 20.3284C17.6569 21.5 15.7712 21.5 12 21.5C8.22876 21.5 6.34315 21.5 5.17157 20.3284C4 19.1569 4 17.2712 4 13.5V8.5"
        stroke="#4E410C"
        strokeWidth="1.5"
      />
      <path
        d="M22 10.5L17.6569 6.33548C14.9902 3.77849 13.6569 2.5 12 2.5C10.3431 2.5 9.00981 3.77849 6.34315 6.33548L2 10.5"
        stroke="#4E410C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
  
  export const CartIcon = () => (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 16L17.7201 15.2733C20.4486 15.046 21.0611 14.45 21.3635 11.7289L22 6"
        stroke="#4E4949"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7 6H23"
        stroke="#4E4949"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7 22C8.10457 22 9 21.1046 9 20C9 18.8954 8.10457 18 7 18C5.89543 18 5 18.8954 5 20C5 21.1046 5.89543 22 7 22Z"
        stroke="#4E4949"
        strokeWidth="1.5"
      />
      <path
        d="M18 22C19.1046 22 20 21.1046 20 20C20 18.8954 19.1046 18 18 18C16.8954 18 16 18.8954 16 20C16 21.1046 16.8954 22 18 22Z"
        stroke="#4E4949"
        strokeWidth="1.5"
      />
      <path
        d="M9 20H16"
        stroke="#4E4949"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 2H3.966C4.91068 2 5.73414 2.62459 5.96326 3.51493L8.93852 15.0765C9.08887 15.6608 8.9602 16.2797 8.58824 16.7616L7.63213 18"
        stroke="#4E4949"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
  
  export const AccountIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
        stroke="#4E4949"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
        stroke="#4E4949"
        strokeWidth="1.5"
      />
    </svg>
  );
  
  export const LocationIcon = () => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.6875 6.875C9.6875 8.08312 8.70812 9.0625 7.5 9.0625C6.29188 9.0625 5.3125 8.08312 5.3125 6.875C5.3125 5.66688 6.29188 4.6875 7.5 4.6875C8.70812 4.6875 9.6875 5.66688 9.6875 6.875Z"
        stroke="#BD9E1E"
        strokeWidth="0.9375"
      />
      <path
        d="M7.5 1.25C10.5441 1.25 13.125 3.77061 13.125 6.82863C13.125 9.93531 10.5021 12.1154 8.07938 13.5979C7.90281 13.6976 7.70312 13.75 7.5 13.75C7.29688 13.75 7.09719 13.6976 6.92062 13.5979C4.50244 12.101 1.875 9.94606 1.875 6.82863C1.875 3.77061 4.4559 1.25 7.5 1.25Z"
        stroke="#BD9E1E"
        strokeWidth="0.9375"
      />
    </svg>
  );
  
  export const ArrowDown = () => (
    <svg
      width="14"
      height="9"
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 1.50005C13 1.50005 8.5811 7.5 7 7.5C5.4188 7.5 1 1.5 1 1.5"
        stroke="#141B34"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  export const CustomerCareIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 13.8045C17 13.4588 17 13.286 17.052 13.132C17.2032 12.6844 17.6018 12.5108 18.0011 12.3289C18.45 12.1244 18.6744 12.0222 18.8968 12.0042C19.1493 11.9838 19.4022 12.0382 19.618 12.1593C19.9041 12.3198 20.1036 12.6249 20.3079 12.873C21.2512 14.0188 21.7229 14.5918 21.8955 15.2236C22.0348 15.7334 22.0348 16.2666 21.8955 16.7764C21.6438 17.6979 20.8485 18.4704 20.2598 19.1854C19.9587 19.5511 19.8081 19.734 19.618 19.8407C19.4022 19.9618 19.1493 20.0162 18.8968 19.9958C18.6744 19.9778 18.45 19.8756 18.0011 19.6711C17.6018 19.4892 17.2032 19.3156 17.052 18.868C17 18.714 17 18.5412 17 18.1955V13.8045Z"
        stroke="#141B34"
        strokeWidth="1.5"
      />
      <path
        d="M9.5 21C10.8807 22.3333 13.1193 22.3333 14.5 21"
        stroke="#141B34"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 13.8045C7 13.3693 6.98778 12.9782 6.63591 12.6722C6.50793 12.5609 6.33825 12.4836 5.99891 12.329C5.55001 12.1246 5.32556 12.0224 5.10316 12.0044C4.43591 11.9504 4.07692 12.4058 3.69213 12.8731C2.74875 14.0189 2.27706 14.5918 2.10446 15.2236C1.96518 15.7334 1.96518 16.2666 2.10446 16.7764C2.3562 17.6979 3.15152 18.4702 3.74021 19.1852C4.11129 19.6359 4.46577 20.0472 5.10316 19.9956C5.32556 19.9776 5.55001 19.8754 5.99891 19.6709C6.33825 19.5164 6.50793 19.4391 6.63591 19.3278C6.98778 19.0218 7 18.6307 7 18.1954V13.8045Z"
        stroke="#141B34"
        strokeWidth="1.5"
      />
      <path
        d="M2 16V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12L22.0001 16"
        stroke="#141B34"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  export const NotificationIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.52992 14.7696C2.31727 16.1636 3.268 17.1312 4.43205 17.6134C8.89481 19.4622 15.1052 19.4622 19.5679 17.6134C20.732 17.1312 21.6827 16.1636 21.4701 14.7696C21.3394 13.9129 20.6932 13.1995 20.2144 12.5029C19.5873 11.5793 19.525 10.5718 19.5249 9.5C19.5249 5.35786 16.1559 2 12 2C7.84413 2 4.47513 5.35786 4.47513 9.5C4.47503 10.5718 4.41272 11.5793 3.78561 12.5029C3.30684 13.1995 2.66061 13.9129 2.52992 14.7696Z"
        stroke="#141B34"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 19C8.45849 20.7252 10.0755 22 12 22C13.9245 22 15.5415 20.7252 16 19"
        stroke="#141B34"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  export const Hamburger = () => (
    <svg
      width="12"
      height="15"
      viewBox="0 0 12 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1.5H11"
        stroke="#0B0A0A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 5.5L11 5.50006"
        stroke="#0B0A0A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 9.5H11"
        stroke="#0B0A0A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 13.5H11"
        stroke="#0B0A0A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  export const SearchIcon = () => (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.8542 13.8542L17.4167 17.4167"
        stroke="#0B0A0A"
        strokeWidth="1.1875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8333 8.70834C15.8333 4.77332 12.6434 1.58334 8.70831 1.58334C4.77329 1.58334 1.58331 4.77332 1.58331 8.70834C1.58331 12.6434 4.77329 15.8333 8.70831 15.8333C12.6434 15.8333 15.8333 12.6434 15.8333 8.70834Z"
        stroke="#0B0A0A"
        strokeWidth="1.1875"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  export const Heart = ({ liked }: { liked?: boolean | 0 }) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill={liked ? "#ff0406" : "none"}
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-colors duration-500 ease-in-out ${
        liked && "animate-pulse"
      }`}
    >
      <path
        d="M12.9751 2.66277C11.1873 1.56615 9.62697 2.00807 8.68964 2.71201C8.30524 3.00064 8.11311 3.14495 8.00004 3.14495C7.88697 3.14495 7.69484 3.00064 7.31044 2.71201C6.37312 2.00807 4.81277 1.56615 3.025 2.66277C0.678753 4.10196 0.147854 8.84993 5.55973 12.8556C6.59052 13.6185 7.10591 14 8.00004 14C8.89417 14 9.40957 13.6185 10.4404 12.8556C15.8522 8.84993 15.3213 4.10196 12.9751 2.66277Z"
        stroke="#0B0A0A"
        strokeLinecap="round"
      />
    </svg>
  );
  
  export const CancelIcon = () => (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.9994 7L1 1M1.00064 7L7 1"
        stroke="#0B0A0A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  export const ArrowLeft = () => (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.16681 9.49976H15.8335"
        stroke="#0B0A0A"
        strokeWidth="1.1875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.12466 13.4584C7.12466 13.4584 3.16637 10.5432 3.16635 9.50008C3.16634 8.45698 7.12468 5.54175 7.12468 5.54175"
        stroke="#0B0A0A"
        strokeWidth="1.1875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  export const DeleteIcon = () => (
    <svg
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.1875 3.9375L11.8002 10.2032C11.7012 11.804 11.6517 12.6044 11.2505 13.1799C11.0521 13.4644 10.7967 13.7046 10.5004 13.885C9.90131 14.25 9.09937 14.25 7.49544 14.25C5.88945 14.25 5.08644 14.25 4.48691 13.8843C4.1905 13.7036 3.935 13.463 3.73668 13.178C3.33555 12.6016 3.28716 11.8001 3.19038 10.197L2.8125 3.9375"
        stroke="#BC1323"
        strokeWidth="0.9375"
        strokeLinecap="round"
      />
      <path
        d="M1.875 3.9375H13.125M10.0348 3.9375L9.60819 3.05733C9.32475 2.47266 9.183 2.18033 8.93856 1.99801C8.88437 1.95756 8.82694 1.92159 8.76688 1.89044C8.49619 1.75 8.17131 1.75 7.52156 1.75C6.8555 1.75 6.5225 1.75 6.2473 1.89632C6.18631 1.92876 6.12811 1.96619 6.07331 2.00823C5.82602 2.19794 5.68789 2.50097 5.41163 3.10704L5.03308 3.9375"
        stroke="#BC1323"
        strokeWidth="0.9375"
        strokeLinecap="round"
      />
      <path
        d="M5.93701 10.8125V7.0625"
        stroke="#BC1323"
        strokeWidth="0.9375"
        strokeLinecap="round"
      />
      <path
        d="M9.06299 10.8125V7.0625"
        stroke="#BC1323"
        strokeWidth="0.9375"
        strokeLinecap="round"
      />
    </svg>
  );
  
  export const PenEdit = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.2141 5.98239L16.6158 4.58063C17.39 3.80646 18.6452 3.80646 19.4194 4.58063C20.1935 5.3548 20.1935 6.60998 19.4194 7.38415L18.0176 8.78591M15.2141 5.98239L6.98023 14.2163C5.93493 15.2616 5.41226 15.7842 5.05637 16.4211C4.70047 17.058 4.3424 18.5619 4 20C5.43809 19.6576 6.94199 19.2995 7.57889 18.9436C8.21579 18.5877 8.73844 18.0651 9.78375 17.0198L18.0176 8.78591M15.2141 5.98239L18.0176 8.78591"
        stroke="#BD9E1E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 20H17"
        stroke="#BD9E1E"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
  
  export const OrderCheck = () => (
    <svg
      width="41"
      height="43"
      viewBox="0 0 41 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="20.5" cy="21.5" rx="20.4563" ry="21.5" fill="#C68A00" />
      <path
        d="M30.3579 15.3918C30.7641 16.4963 30.1945 17.2526 29.092 17.9975C28.2024 18.5986 27.069 19.2497 25.8681 20.363C24.6909 21.4543 23.5419 22.7687 22.5209 24.0625C21.504 25.351 20.6396 26.586 20.0289 27.5005C19.6342 28.0914 19.0835 28.9729 19.0835 28.9729C18.6952 29.6187 17.9969 30.0096 17.2482 29.9998C16.4994 29.99 15.8116 29.5812 15.44 28.9251C14.4902 27.248 13.7573 26.5857 13.4204 26.3478C12.519 25.7112 11.4614 25.6171 11.4614 24.1335C11.4614 22.9554 12.408 22.0003 13.5757 22.0003C14.4001 22.0323 15.1664 22.373 15.8453 22.8526C16.2793 23.1591 16.739 23.5645 17.2172 24.0981C17.7785 23.2936 18.4548 22.3653 19.2129 21.4047C20.314 20.0097 21.6136 18.5131 23.0073 17.2212C24.3773 15.9511 25.9612 14.7623 27.6402 14.1338C28.735 13.724 29.9517 14.2872 30.3579 15.3918Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  export const UncheckedOrder = () => (
    <svg
      width="44"
      height="43"
      viewBox="0 0 44 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.956329" width="43" height="43" rx="21.5" fill="#D8CDAB" />
    </svg>
  );
  
  export const AccountProfile = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.18007 15.2964C3.92249 16.0335 0.625212 17.5386 2.63348 19.422C3.6145 20.342 4.7071 21 6.08077 21H13.9192C15.2929 21 16.3855 20.342 17.3665 19.422C19.3748 17.5386 16.0775 16.0335 14.8199 15.2964C11.8709 13.5679 8.12906 13.5679 5.18007 15.2964Z"
        stroke="#0B0A0A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7Z"
        stroke="#0B0A0A"
        strokeWidth="1.5"
      />
      <path
        d="M19.6221 4.56564C19.8457 4.32342 19.9574 4.20232 20.0762 4.13168C20.3628 3.96123 20.7157 3.95593 21.0071 4.1177C21.1279 4.18474 21.2431 4.30244 21.4735 4.53783C21.7039 4.77322 21.8192 4.89092 21.8848 5.01428C22.0431 5.31194 22.038 5.67244 21.8711 5.96521C21.8019 6.08655 21.6834 6.20073 21.4463 6.4291L18.6252 9.14629C18.1759 9.57906 17.9512 9.79545 17.6704 9.90512C17.3896 10.0148 17.081 10.0067 16.4636 9.99057L16.3796 9.98838C16.1917 9.98346 16.0977 9.98101 16.0431 9.91901C15.9885 9.85702 15.9959 9.7613 16.0108 9.56985L16.0189 9.4659C16.0609 8.92706 16.0819 8.65765 16.1871 8.41547C16.2923 8.17328 16.4738 7.97664 16.8368 7.58335L19.6221 4.56564Z"
        stroke="#0B0A0A"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  export const AddressIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z"
        stroke="#0B0A0A"
        strokeWidth="1.5"
      />
      <path
        d="M18.2222 17C19.6167 18.9885 20.2838 20.0475 19.8865 20.8999C19.8466 20.9854 19.7999 21.0679 19.7469 21.1467C19.1724 22 17.6875 22 14.7178 22H9.28223C6.31251 22 4.82765 22 4.25311 21.1467C4.20005 21.0679 4.15339 20.9854 4.11355 20.8999C3.71619 20.0475 4.38326 18.9885 5.77778 17"
        stroke="#0B0A0A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z"
        stroke="#0B0A0A"
        strokeWidth="1.5"
      />
    </svg>
  );
  
  export const LogoutIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 3.09502C13.543 3.03241 13.0755 3 12.6 3C7.29807 3 3 7.02944 3 12C3 16.9706 7.29807 21 12.6 21C13.0755 21 13.543 20.9676 14 20.905"
        stroke="#BC1323"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M21 12H11M21 12C21 11.2998 19.0057 9.99153 18.5 9.5M21 12C21 12.7002 19.0057 14.0085 18.5 14.5"
        stroke="#BC1323"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  export const CaretRight = () => (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="25" height="25" rx="12.5" fill="#F9F3DB" />
      <path
        d="M10 7.5C10 7.5 15 11.1824 15 12.5C15 13.8177 10 17.5 10 17.5"
        stroke="#704E00"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  export const Pen = () => (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.2796 2.98369L12.5645 1.69875C13.2742 0.98909 14.4248 0.98909 15.1344 1.69875C15.844 2.4084 15.844 3.55898 15.1344 4.26864L13.8495 5.55359M11.2796 2.98369L3.73188 10.5314C2.77369 11.4896 2.29457 11.9687 1.96834 12.5525C1.6421 13.1363 1.31387 14.5149 1 15.8332C2.31825 15.5193 3.69682 15.191 4.28065 14.8648C4.86447 14.5386 5.34357 14.0595 6.30177 13.1013L13.8495 5.55359M11.2796 2.98369L13.8495 5.55359"
        stroke="#BD9E1E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  export const MinAddressIcon = () => (
    <svg
      width="12"
      height="16"
      viewBox="0 0 12 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.68025 5.93786C7.68025 6.91182 6.89068 7.7014 5.91671 7.7014C4.94274 7.7014 4.15317 6.91182 4.15317 5.93786C4.15317 4.96388 4.94274 4.17432 5.91671 4.17432C6.89068 4.17432 7.68025 4.96388 7.68025 5.93786Z"
        stroke="#0B0A0A"
        strokeWidth="0.828741"
      />
      <path
        d="M6.80439 11.9294C6.56646 12.1586 6.24846 12.2867 5.91755 12.2867C5.58657 12.2867 5.26856 12.1586 5.03063 11.9294C2.85188 9.81827 -0.0679168 7.45985 1.35598 4.03592C2.12586 2.18462 3.97394 1 5.91755 1C7.86111 1 9.70916 2.18463 10.479 4.03592C11.9012 7.45554 8.9885 9.82553 6.80439 11.9294Z"
        stroke="#0B0A0A"
        strokeWidth="0.828741"
      />
      <path
        d="M10.1497 13.6973C10.1497 14.4765 8.25479 15.1081 5.91725 15.1081C3.57971 15.1081 1.68475 14.4765 1.68475 13.6973"
        stroke="#0B0A0A"
        strokeWidth="0.828741"
        strokeLinecap="round"
      />
    </svg>
  );
  
  export const CurLoc = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.922 4.79004C16.6963 3.16245 19.0834 2.34866 20.3674 3.63261C21.6513 4.91656 20.8375 7.30371 19.21 12.078L18.1016 15.3292C16.8517 18.9958 16.2267 20.8291 15.1964 20.9808C14.9195 21.0216 14.6328 20.9971 14.3587 20.9091C13.3395 20.5819 12.8007 18.6489 11.7231 14.783C11.4841 13.9255 11.3646 13.4967 11.0924 13.1692C11.0134 13.0742 10.9258 12.9866 10.8308 12.9076C10.5033 12.6354 10.0745 12.5159 9.21705 12.2769C5.35111 11.1993 3.41814 10.6605 3.0909 9.64127C3.00292 9.36724 2.97837 9.08053 3.01916 8.80355C3.17088 7.77332 5.00419 7.14834 8.6708 5.89838L11.922 4.79004Z"
        stroke="#BD9E1E"
        strokeWidth="1.5"
      />
    </svg>
  );
  
  export const InboxIcon = () => (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.08334 6.25L9.82789 8.37169C11.2084 9.15388 11.7916 9.15388 13.1721 8.37169L16.9167 6.25"
        stroke="#704E00"
        strokeWidth="0.8125"
        strokeLinejoin="round"
      />
      <path
        d="M6.09188 10.2994C6.12729 11.96 6.14499 12.7902 6.75769 13.4053C7.37038 14.0203 8.2231 14.0417 9.92854 14.0845C10.9796 14.1109 12.0204 14.1109 13.0715 14.0845C14.7769 14.0417 15.6296 14.0203 16.2423 13.4053C16.855 12.7902 16.8727 11.96 16.9081 10.2994C16.9195 9.76553 16.9195 9.2348 16.9081 8.70088C16.8727 7.04038 16.855 6.21013 16.2423 5.5951C15.6296 4.98008 14.7769 4.95866 13.0715 4.91581C12.0204 4.88939 10.9796 4.88939 9.92853 4.9158C8.2231 4.95865 7.37038 4.98007 6.75768 5.5951C6.14499 6.21012 6.12729 7.04037 6.09187 8.70088C6.08049 9.2348 6.08049 9.76553 6.09188 10.2994Z"
        stroke="#704E00"
        strokeWidth="0.8125"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  export const SendIcon = () => (
    <svg
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.7927 4.60884C15.4038 6.65348 17.7093 7.67577 17.7811 9.49017C17.8527 11.3045 15.635 12.5055 11.1996 14.9076L8.17908 16.5433C4.77275 18.388 3.06955 19.3104 2.20988 18.7226C1.97882 18.5646 1.78487 18.3521 1.64328 18.1014C1.11676 17.1694 2.03285 15.3841 3.86496 11.8134C4.27135 11.0214 4.47459 10.6253 4.49692 10.2001C4.50337 10.0767 4.49848 9.95289 4.48232 9.83039C4.42651 9.40821 4.19267 9.02944 3.72509 8.272C1.61699 4.85694 0.562944 3.14941 1.01429 2.17874C1.13564 1.91777 1.31218 1.69053 1.53011 1.51478C2.34071 0.861072 4.11135 1.64621 7.65264 3.21648L10.7927 4.60884Z"
        stroke="#655F5F"
        strokeWidth="1.5"
      />
    </svg>
  );
  
  export const CustomerAvatar = () => (
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5208 25.9792V23.2L19.0916 23.5021C20.8437 23.8646 22.475 22.5958 22.5958 20.8437L22.9583 16.9167L24.7104 16.1917C25.3146 15.95 25.5562 15.225 25.1937 14.6208L22.9583 10.875C22.5958 6.28333 19.9979 1.8125 13.2916 1.8125C6.40415 1.8125 3.02081 6.8875 3.02081 12.0833C3.02081 14.3187 3.80623 16.2521 5.01456 17.8833C6.10206 19.3937 6.64581 21.2062 6.64581 23.0187V25.9187H17.5208V25.9792Z"
        fill="#FFB74D"
      />
      <path
        d="M17.5209 25.979V23.1998L13.2917 22.354V25.979H17.5209Z"
        fill="#FF9800"
      />
      <path
        d="M20.2396 13.896C20.7401 13.896 21.1458 13.4903 21.1458 12.9897C21.1458 12.4892 20.7401 12.0835 20.2396 12.0835C19.7391 12.0835 19.3333 12.4892 19.3333 12.9897C19.3333 13.4903 19.7391 13.896 20.2396 13.896Z"
        fill="#784719"
      />
      <path
        d="M12.9291 1.8125C7.43123 1.8125 3.02081 6.22292 3.02081 11.7208C3.02081 18.4271 6.64581 18.6083 6.64581 22.9583L8.21665 22.4146C9.4854 21.9917 10.5729 21.025 11.0562 19.7563L12.7479 15.6479L16.3125 13.8958V10.2708C16.3125 10.2708 20.5416 7.975 20.5416 4.04792C18.7291 2.5375 15.5271 1.8125 12.9291 1.8125Z"
        fill="#FF5722"
      />
      <path
        d="M12.6875 1.26953C12.325 1.26953 12.0833 1.5112 12.0833 1.8737V10.2716C12.0833 10.6341 12.325 10.8758 12.6875 10.8758C13.05 10.8758 13.2916 10.6341 13.2916 10.2716V1.8737C13.2916 1.5112 13.05 1.26953 12.6875 1.26953ZM22.2937 19.2737C17.5208 19.2737 16.0708 16.3133 16.0104 16.1924C15.8896 15.8904 15.5271 15.7695 15.225 15.8904C14.9229 16.0112 14.8021 16.3737 14.9229 16.6758C14.9833 16.857 16.7354 20.482 22.2937 20.482C22.6562 20.482 22.8979 20.2404 22.8979 19.8779C22.8979 19.5154 22.5958 19.2737 22.2937 19.2737Z"
        fill="#546E7A"
      />
      <path
        d="M22.3541 21.1457C23.0215 21.1457 23.5625 20.6047 23.5625 19.9373C23.5625 19.27 23.0215 18.729 22.3541 18.729C21.6868 18.729 21.1458 19.27 21.1458 19.9373C21.1458 20.6047 21.6868 21.1457 22.3541 21.1457Z"
        fill="#37474F"
      />
      <path
        d="M12.6875 18.1248C15.0232 18.1248 16.9166 16.2314 16.9166 13.8957C16.9166 11.56 15.0232 9.6665 12.6875 9.6665C10.3518 9.6665 8.45831 11.56 8.45831 13.8957C8.45831 16.2314 10.3518 18.1248 12.6875 18.1248Z"
        fill="#37474F"
      />
      <path
        d="M12.6875 16.3123C14.0222 16.3123 15.1041 15.2304 15.1041 13.8957C15.1041 12.561 14.0222 11.479 12.6875 11.479C11.3528 11.479 10.2708 12.561 10.2708 13.8957C10.2708 15.2304 11.3528 16.3123 12.6875 16.3123Z"
        fill="#546E7A"
      />
    </svg>
  );
  