import os
import argparse

def print_directory_tree(start_path, prefix="", ignore_dirs=None, ignore_files=None, max_depth=None, current_depth=0):
    """
    Rekurzívan kirajzol egy könyvtárstruktúrát fa formában.
    
    Args:
        start_path (str): A kiindulási könyvtár elérési útja
        prefix (str): Az aktuális elem előtti prefix (a fa struktúra megjelenítéséhez)
        ignore_dirs (list): Figyelmen kívül hagyandó könyvtárnevek listája
        ignore_files (list): Figyelmen kívül hagyandó fájlnevek listája
        max_depth (int): Maximális mélység a rekurzióhoz
        current_depth (int): Aktuális mélység szintje
    """
    if ignore_dirs is None:
        ignore_dirs = []
    if ignore_files is None:
        ignore_files = []
    
    # Ellenőrizzük, hogy elértük-e a maximális mélységet
    if max_depth is not None and current_depth > max_depth:
        return
    
    # Ellenőrizzük, hogy létezik-e a könyvtár
    if not os.path.isdir(start_path):
        print(f"Hiba: '{start_path}' nem egy könyvtár vagy nem létezik.")
        return
    
    # Könyvtár tartalmának lekérdezése és rendezése
    try:
        items = sorted(os.listdir(start_path))
    except PermissionError:
        print(f"{prefix}└── {os.path.basename(start_path)} [Hozzáférés megtagadva]")
        return
    
    # Könyvtárak és fájlok szétválasztása
    dirs = []
    files = []
    
    for item in items:
        # Teljes elérési út létrehozása
        item_path = os.path.join(start_path, item)
        
        # Figyelmen kívül hagyjuk a rejtett elemeket (. kezdetűek)
        if item.startswith('.'):
            continue
        
        if os.path.isdir(item_path) and item not in ignore_dirs:
            dirs.append(item)
        elif os.path.isfile(item_path) and item not in ignore_files:
            files.append(item)
    
    # Elemek összes száma (könyvtárak és fájlok)
    total_items = len(dirs) + len(files)
    
    # Aktuális elem sorszáma (a megfelelő fa struktúra rajzolásához)
    item_count = 0
    
    # Könyvtárak listázása
    for dir_name in dirs:
        item_count += 1
        dir_path = os.path.join(start_path, dir_name)
        
        # Határozzuk meg a következő elem előtagját
        is_last_item = item_count == total_items
        if is_last_item:
            print(f"{prefix}└── {dir_name}/")
            new_prefix = prefix + "    "
        else:
            print(f"{prefix}├── {dir_name}/")
            new_prefix = prefix + "│   "
        
        # Rekurzív hívás a könyvtár tartalmának kirajzolásához
        print_directory_tree(dir_path, new_prefix, ignore_dirs, ignore_files, max_depth, current_depth + 1)
    
    # Fájlok listázása
    for i, file_name in enumerate(files):
        item_count += 1
        is_last_item = item_count == total_items
        if is_last_item:
            print(f"{prefix}└── {file_name}")
        else:
            print(f"{prefix}├── {file_name}")

def main():
    parser = argparse.ArgumentParser(description='Könyvtárszerkezet megjelenítése fa struktúrában')
    parser.add_argument('path', nargs='?', default='.', help='A kiindulási könyvtár elérési útja (alapértelmezett: jelenlegi könyvtár)')
    parser.add_argument('-d', '--depth', type=int, help='Maximális vizsgálati mélység')
    parser.add_argument('--ignore-dir', action='append', help='Figyelmen kívül hagyandó könyvtárnevek')
    parser.add_argument('--ignore-file', action='append', help='Figyelmen kívül hagyandó fájlnevek')
    
    args = parser.parse_args()
    
    print(f"\nKönyvtárszerkezet: {os.path.abspath(args.path)}\n")
    print_directory_tree(
        args.path, 
        ignore_dirs=args.ignore_dir, 
        ignore_files=args.ignore_file, 
        max_depth=args.depth
    )

if __name__ == "__main__":
    main()