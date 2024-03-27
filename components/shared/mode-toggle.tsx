'use client'

import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ModeToggle = () => {
	const [mount, setMount] = useState(false)
	const { setTheme, resolvedTheme } = useTheme()

	useEffect(() => setMount(true), [])

	return mount && resolvedTheme === 'dark' ? (
		<Button size={'icon'} variant={'ghost'} onClick={() => setTheme('light')}>
			<Sun />
		</Button>
	) : (
		<Button size={'icon'} variant={'ghost'} onClick={() => setTheme('dark')}>
			<Moon />
		</Button>
	)
}

export default ModeToggle
