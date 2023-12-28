import { useContext, useEffect } from "react";
import { PageSettingsContext } from "../context/PageContext";

function usePageHeader(value=true) {
    const { setPageHeader } = useContext(PageSettingsContext)
    
    useEffect(() => {
        setPageHeader(value)
        return () => {
            setPageHeader(true)
        }
    }, [value, setPageHeader])
}

function usePageFooter(value=true) {
    const { setPageFooter } = useContext(PageSettingsContext)
    
    useEffect(() => {
        setPageFooter(value)
        return () => {
            setPageFooter(true)
        }
    }, [value, setPageFooter])
}

function useSettingButton(value=true) {
    const { setpageSettingButton } = useContext(PageSettingsContext)
    
    useEffect(() => {
        setpageSettingButton(value)
        return () => {
            setpageSettingButton(true)
        }
    }, [value, setpageSettingButton])
}

function usePageSidebar(value=true) {
    const { setPageSidebar } = useContext(PageSettingsContext)
    
    useEffect(() => {
        setPageSidebar(value)
        return () => {
            setPageSidebar(false)
        }
    }, [value, setPageSidebar])
}

function usePageBreadcrumb(value=true) {
    const { setPageBreadcrumb } = useContext(PageSettingsContext)

    useEffect(() => {
        setPageBreadcrumb(value)
        return () => {
            setPageBreadcrumb(false)
        }
    }, [value, setPageBreadcrumb])
    
}

function usePageTitle(value="Multiple Projects") {
    useEffect(() => {
        document.title = value
        return () => {
            document.title = "Multiple Projects"
        }
    }, [value])
    
}

export { usePageHeader, usePageFooter, usePageSidebar, usePageTitle, usePageBreadcrumb, useSettingButton };