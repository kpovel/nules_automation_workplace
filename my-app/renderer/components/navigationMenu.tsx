import { useRouter } from "next/router";
import Link from "next/link";

export function NavigationMenu({navigation}: {navigation: {name: string, href: string}[]}) {
  const router = useRouter();
  const isActivePage = (currentPage: string) => currentPage === router.pathname;

  return (
    <div className="flex space-x-4 justify-center my-5">
      {navigation.map((item) => {
        return (
          <Link
            key={item.name}
            href={item.href}
          >
            <a
              className={`${
                isActivePage(item.href)
                  ? "bg-gray-300 text-gray-800"
                  : "hover:bg-gray-700 hover:text-white"
              }
              rounded-md px-3 py-2 text-sm font-medium
            `}
            >
              {item.name}
            </a>
          </Link>
        );
      })}
    </div>
  );
}
