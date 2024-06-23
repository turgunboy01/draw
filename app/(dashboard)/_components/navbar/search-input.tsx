"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import qs from "query-string";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDebounceValue } from "usehooks-ts"; // useDebounce o'rniga useDebounceValue ni import qilamiz

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const debouncedValue = useDebounceValue(value, 500); // useDebounce o'rniga useDebounceValue ni ishlatamiz

  // Input qiymati o'zgarganda qo'llaniladigan funksiya
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    // Debounced qiymat bilan URL ni yaratish
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          search: debouncedValue,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    // URL ni router orqali push qilish
    router.push(url);
  }, [debouncedValue, router]);

  return (
    <div className="w-full relative">
      <Search className="top-1/2 absolute left-3 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        className="w-full max-w-[516px] pl-9"
        placeholder="Search boards"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default SearchInput;
