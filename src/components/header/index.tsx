import Image from 'next/image'
import {
  DropdownMenuTrigger,
  HeaderContainer,
  NavigationButton,
  NavigationButtonPurchase,
  IconButton,
  DropdownMenuContent,
} from './styles'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import MenuIcon from '@mui/icons-material/Menu'

import logo from '../../assets/logo-hvex.svg'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <a>
          <Image src={logo} width={115} alt="Logo Hvex" />
        </a>

        <ul>
          <li>
            <NavigationButton>Omni trafo</NavigationButton>
          </li>
          <li>
            <NavigationButton>Sinalizador de faltas</NavigationButton>
          </li>
          <li>
            <NavigationButton>Acoplador DP</NavigationButton>
          </li>
          <li>
            <NavigationButtonPurchase>Comprar agora</NavigationButtonPurchase>
          </li>
        </ul>

        <DropdownMenu.Root>
          <DropdownMenuTrigger asChild>
            <IconButton>
              <MenuIcon fontSize="large" />
            </IconButton>
          </DropdownMenuTrigger>

          <DropdownMenu.Portal>
            <DropdownMenuContent sideOffset={4}>
              <DropdownMenu.Item>
                <NavigationButton>Omni trafo</NavigationButton>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <NavigationButton>Sinalizador de faltas</NavigationButton>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <NavigationButton>Acoplador DP</NavigationButton>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <NavigationButtonPurchase>
                  Comprar agora
                </NavigationButtonPurchase>
              </DropdownMenu.Item>
            </DropdownMenuContent>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </nav>
    </HeaderContainer>
  )
}